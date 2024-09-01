const express = require("express");
const app = express();

const ToDos = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require("./todoHandlers"); // 'todoHandlers.js' contains the route handlers

// Middleware to parse JSON
app.use(express.json());

// ROUTES

// GET /cars
app.get("/todos", getAllTodos);

// POST /todos
app.post("/todos", createTodo);

// GET /todos/:todoId
app.get("/todos/:todoId", getTodoById);

// PUT /todos/:todoId
app.put("/todos/:todoId", updateTodo);

// DELETE /todos/:todoId
app.delete("/todos/:todoId", deleteTodo);

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
