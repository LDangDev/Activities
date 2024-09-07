const express = require("express");
const app = express();
const carRouter = require("./routes/carRouter");
const { middleware1, middleware2} = require("./middleware/customMiddlewares");
const logger = require("./middleware/logger");
const notFound = require("./middleware/notFound");

// Middleware to parse JSON
// app.use(express.json());

app.use(logger);
 
app.get("/", middleware1 ,(req, res) => res.send("API Running!"));

// Use the carRouter for all /cars routes
app.use("/cars", carRouter);

app.use(middleware2);
app.use(notFound);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
