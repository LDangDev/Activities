// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2024-08-30"
// }

let todosArray = []
let todoId = 1


function getAll() {
    return todosArray;
}

function addOne(task, completed, dueDate) {
    if(!task || !dueDate || completed === undefined){
        return false
    }
    const newTodo = {
        id: todoId++,
        task,
        completed,
        dueDate
    }

    todosArray.push(newTodo)
    return newTodo
}

function findById(id) {
    return result = todosArray.find(todo => todo.id === Number(id)) || false
}

function updateOneById(id, updateData) {
    const todo = findById(id)

    if(updateData.task) {
        todo.task = updateData.task
    }
    if(updateData.completed) {
        todo,completed = updateData.completed
    }
    if(updateData.dueDate) {
        todo,dueDate = updateData.dueDate
    }
    return todo
}

function deleteOneById(id) {
    const todo = findById(id)
    if(todo) {
        const initialLength = todosArray.length
        todosArray = todosArray.filter(todo => todo.id !== Number(id))
        return todosArray.length < initialLength
    }
    return False
}


if(require.main === module) {
    // console.log("getAll called:", getAll())
    addOne('dfsdf', 0, "2024-08-30")
    addOne("exercise", false, "2024-08-30")
    addOne("sleep", true, "2024-08-30")
    addOne("test", false, "2024-08-30")
    addOne("undefined", undefined, "2024-08-30")
    console.log("List of todos: ",todosArray)
    console.log("Find todo id 3: ", findById(3))
    console.log("Find todo id 10: ", findById(10))
}

Todos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = Todos;