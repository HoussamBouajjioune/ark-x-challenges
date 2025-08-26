// // Node.js and Express server code demonstrating unsafe data handling for database interaction
// const express = require('express');
// const app = express();

// // Simulated database object
// let database = {};

// // Middleware to parse request body
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

// app.post('/register', (req, res) => {
//   // User input is directly assigned without validation or sanitization
//   let username = req.body.username;
//   let email = req.body.email;

//   // Simulating saving data to a 'database'
//   database[email] = { email: email };

//   res.send(`User ${username} registered with email ${email}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));



// // Secured Node.js and Express server with input validation and sanitization
// const express = require('express');
// const app = express();
// const { body, validationResult } = require('express-validator');

// // Simulated database object
// let database = {};

// app.post('/submit-form', 
//   body('username').isLength({ min: 5 }).trim().escape(), 
//   (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     // User input is validated and sanitized
//     let username = req.body.username;
//     let email = req.body.email;

//     // Simulating saving data to a 'database'
//     database[email] = { email };
//     database[username] = { username};
//     res.send(`User ${username} registered with email ${email}`);
// });

// app.listen(3000, () => console.log('Server running on port 3000'));



// Secured Node.js and Express server with input validation and sanitization
const express = require('express');
const { body, param, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Simulated database (in-memory object)
let database = {};

// POST /submit-form
app.post(
  '/submit-form/:id',
  [
    // Validation & sanitization rules
    body('username')
      .isLength({ min: 5 }).withMessage('Username must be at least 5 characters long')
      .trim()
      .escape(),
    body('email')
      .isEmail().withMessage('Invalid email format')
      .normalizeEmail(),
    param('id')
      .isLength({ min: 5 })
      .withMessage('id must be at least 5 characters long')],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extract validated & sanitized input
    const { username, email } = req.body;

    // Check if user already exists (by email)
    if (database[email]) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Save user in the "database"
    database[email] = { username, email };

    // Send success response
    res.json({
      message: 'User registered successfully',
      user: { username, email }
    });
  }
);

app.listen(3000, () => console.log('✅ Server running on http://localhost:3000'));
