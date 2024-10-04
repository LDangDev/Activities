const config = require('./utils/config')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const workoutRoutes = require('./routes/workouts')
const logger = require('./utils/logger')
// Import your Swagger configuration
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swaggerConfig.js");
// express app
const app = express()

// middleware
app.use(express.json())

app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

logger.info('connecting to', config.MONGO_URI)
  // connect to db
mongoose
.connect(config.MONGO_URI)
.then(() => {
  logger.info('connected to database')
})
.catch((error) => {
  logger.error(error)
});

module.exports = app;