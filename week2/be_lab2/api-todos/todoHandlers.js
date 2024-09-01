const Todos = require("./todoList")

// GET

const getAllTodos = (req, res) => {
    const todos = Todos.getAll()
    res.json(todos)
}

// POST

const createTodo = (req, res) => {
    const {task, completed, dueDate} = req.body

    const newTodo = Todos.addOne(task, completed, dueDate)

    if(newTodo) {
        res.json(newTodo)
    } else {
        res.status(500).json({ message: "Failed to create task"})
    }
}

// GET task By ID

const getTodoById = (req, res) => {
    const todoId = req.params.todoId
    // console.log(todoId)
    const todo = Todos.findById(todoId)
    console.log(todo)
    if(todo) {
        res.json(todo)
    }else{
        res.status(404).json({ message: "Todo not found"})
    }
}

// PUT

const updateTodo = (req, res) => {
    const todoId = req.params.todoId

    const { task, completed, dueDate } = req.body

    const updateTodo = Todos.updateOneById(todoId, { task, completed, dueDate })

    if(updateTodo) {
        res.json(updateTodo)
    } else{
        res.status(404).json({ message: "Task not found"})
    }
}

// DELETE

const deleteTodo = (req, res) => {
    const todoId = req.params.todoId;
    console.log('Task ID:', todoId);
    const isDeleted = Todos.deleteOneById(todoId);
  
    if (isDeleted) {
      res.json({ message: "Task deleted successfully" });
    } else {
      res.status(404).json({ message: "Task not found" });
    }
  };

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
  };

