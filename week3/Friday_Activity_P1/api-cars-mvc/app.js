const express = require('express');
const app = express();
const carRouter = require('./routes/carRouter');
const userRouter = require('./routes/userRouter');

// Middleware to parse JSON
app.use(express.json());

// Use the carRouter for all /cars routes
app.use('/cars', carRouter);

// Use the userRouter for all /users routes
app.use('/users', userRouter);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
