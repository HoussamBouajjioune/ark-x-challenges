const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.get('/set-cookie', (req, res) => {
  // Insecure: Cookie not set with HttpOnly or Secure flags
  res.cookie('user', 'houssam bouajjioune', { maxAge: 900000 });
  res.send('Cookie set');
});

app.get('/check-cookie-raw', (req, res) => {
  console.log(req.headers.cookie); 
  // Example output: "user=houssam%20bouajjioune; theme=dark"

  res.send(`Raw cookie header: ${req.headers.cookie}`);
});

// middleware to parse cookies
app.use(cookieParser());

app.get('/get-cookie', (req, res) => {
  // access cookies via req.cookies
  const user = req.cookies.user;
  if (user) {
    res.send(`Cookie found: ${user}`);
  } else {
    res.send('No cookie found');
  }
});

app.get('/delete-cookie', (req, res) => {
  res.clearCookie('user'); // remove the 'user' cookie
  res.send('Cookie deleted');
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});