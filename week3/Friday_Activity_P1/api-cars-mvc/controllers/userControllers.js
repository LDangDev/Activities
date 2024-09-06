const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll()
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({ ...req.body })

  if(newUser){
    res.json(newUser)
  }else {
    json.status(500).json({ message: "Fail to create new user"})
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const user = User.findById(req.params.userId)

  if(user){
    res.json(user);
  }else {
    res.status(404).json(`{ "message": "user with ${userId} not found}`)
  }
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const id = req.params.userId
  const updateUser = User.updateOneById(id, { ...req.body }) 
  
  if(updateUser) {
    res.json(updateUser);
  }else{
    res.status(404).json(`{ "message": "user with ${id} not found}`)
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const id = req.params.userId
  const isDeleted = User.deleteOneById(id)

  if(isDeleted){
    res.json({ message: "Delete user successfully" });
  }else {
    res.status(404).json(`{ "message": "user with ${id} not found}`)
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
