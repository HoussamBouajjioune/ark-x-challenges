// logger.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'requests.log');

function logger(req, res, next) {
  const now = new Date().toISOString();
  const logMessage = `[${now}] ${req.method} ${req.url}\n`;

  // Log to console
  console.log(logMessage.trim());

  // Append to file
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) console.error('Failed to write to log file', err);
  });

  next(); // Pass control to the next middleware
}

module.exports = logger;
