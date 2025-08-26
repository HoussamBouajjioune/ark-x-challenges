const express = require('express');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');


const app = express();

// Parse cookies (required for csurf with { cookie: true })
app.use(cookieParser());

// Parse form data (so req.body works)
app.use(express.urlencoded({ extended: false }));

// Enable CSRF protection middleware
app.use(csurf({ cookie: true }));

// Update profile route
app.post('/profile', (req, res) => {
    // Validate CSRF token
    // if (req.csrfToken() !== req.body._csrf) {
    //     return res.status(403).send('Invalid CSRF token');
    // }

    res.send('Profile updated successfully');
});

// // Render form with CSRF token
// app.get('/profile', (req, res) => {
//   res.render('profile', { csrfToken: req.csrfToken() });
// });

app.get('/profile', (req, res) => {
    res.send(`
    <form method="POST" action="/profile">
      <input type="hidden" name="_csrf" value="${req.csrfToken()}">
      <input type="text" name="username" placeholder="Enter username">
      <button type="submit">Update</button>
    </form>
  `);
});


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
