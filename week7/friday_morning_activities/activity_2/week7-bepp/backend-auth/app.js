// require('dotenv').config()
// const express = require("express");
// const app = express();
// const jobRouter = require("./routes/jobRouter");
// const userRouter = require("./routes/userRouter");
// const { unknownEndpoint,errorHandler } = require("./middleware/customMiddleware");
// const connectDB = require("./config/db");
// const cors = require("cors");
// // Swagger
// const swaggerUI = require("swagger-ui-express");
// const swaggerSpec = require("./swagger.json");

// // Middlewares
// app.use(cors())
// app.use(express.json());
// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// connectDB();

// // Use the jobRouter for all "/jobs" routes
// app.use("/api/jobs", jobRouter);
// // Use the userRouter for all "/jobs" routes
// app.use("/api/users", userRouter);


// app.use(unknownEndpoint);
// app.use(errorHandler);

// module.exports = app;

// // app.listen(process.env.PORT, () => {
// //   console.log(`Server running on port ${process.env.PORT}`)
// // })  

const config = require("./utils/config");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const logger = require("./utils/logger");

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger.json");


// express app
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  logger.info(req.path, req.method);
  next();
});

// routes
app.use("/api/user", userRoutes);
app.use("/api/workouts", workoutRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

// connect to db
logger.info("connecting to", config.MONGO_URI);
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("connected to db");
  })
  .catch((error) => {
    logger.error(error);
  });

module.exports = app;