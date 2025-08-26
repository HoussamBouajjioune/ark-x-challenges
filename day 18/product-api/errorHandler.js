// errorHandler.js
function errorHandler(err, req, res, next) {
  const now = new Date().toISOString();
  const logMessage = `[${now}] ERROR: ${err.message}\n`;

  // Log the error
  console.error(logMessage.trim());

  // Determine response based on error message
  let status = 500; // default server error
  let message = 'Something went wrong! Please try again later.';

  switch (err.message) {
    case 'Product not found':
      status = 404;
      message = 'The requested product does not exist.';
      break;
    case 'Name and price are required':
      status = 400;
      message = 'Please provide both name and price for the product.';
      break;
    case 'Route not found':
      status = 404;
      message = 'The requested route does not exist.';
      break;
    default:
      // For unexpected errors, keep 500 and generic message
      break;
  }

  res.status(status).json({ error: message });
}

module.exports = errorHandler;
