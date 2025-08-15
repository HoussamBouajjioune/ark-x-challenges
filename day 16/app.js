// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to my Express.js server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
