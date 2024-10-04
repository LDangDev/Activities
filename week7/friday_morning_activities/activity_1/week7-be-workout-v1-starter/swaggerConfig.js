
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout API",
      version: "1.0.0",
      description: "API for managing workouts",
    },
    servers: [
      {
        url: "http://localhost:4000/api", // Update with your API server URL
      },
    ],
  },
  apis: ["routes/*.js"], // Update with the path to your route file
  components: {
    schemas: {
      Workout: {
        type: "object",
        properties: {
          title: { type: "string" },
          reps: { type: "number" },
          load: { type: "number" },
        },
        example: {
          title: "Sample Workout",
          reps: 10,
          load: 50,
        },
      },
    },
  },
};

const specs = swaggerJsdoc(options);
module.exports = specs;