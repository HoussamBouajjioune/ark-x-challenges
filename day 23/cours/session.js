const express = require('express');
const app = express();
const session = require('express-session');

// Session middleware
app.use(session({
  secret: 'your_secret_key',
  resave: false,
//   saveUninitialized: true,
  cookie: { secure: false, httpOnly: true } // secure: true requires HTTPS
}));


// Set session
app.get('/set-session', (req, res) => {
  req.session.user = 'user name';
  req.session.user2 = 'user name2';
  res.send('Session set');
});

// Get session
app.get('/get-session', (req, res) => {
  if (req.session.user) {
    console.log(req.session.id);
    console.log(req.session.user);
    console.log(req.session.user2);
    res.send(`Session user: ${req.session.user}`);
  } else {
    res.send('No session found');
  }
});

// Delete session
app.get('/delete-session', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send('Error deleting session');
    }
    res.send('Session deleted');
  });
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
