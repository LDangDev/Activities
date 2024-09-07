// middleware/notFound.js

// Middleware to handle not found resources
const notFound = (req, res, next) => {
  res.status(404).send("Resource not found");
};

module.exports = notFound;
