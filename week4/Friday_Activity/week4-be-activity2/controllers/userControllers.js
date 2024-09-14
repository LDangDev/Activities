const { default: mongoose } = require("mongoose");
const User = require("../models/userModel");

// GET /users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
  }
};

// POST /users
const createUser = async (req, res) => {
  const newUser = await User.create({ ...req.body });
  res.status(201).json(newUser);
};

// GET /users/:userId
const getUserById = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const user = await User.findById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve user" });
  }
};

// PUT /users/:userId
const updateUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true, overwrite: true }
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
};

// PATCH /users/:userId - Refactored to act as PATCH
const patchUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { ...req.body },
      { new: true } // Removed `overwrite: true` to act like PATCH
    );
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update user" });
  }
};

// DELETE /users/:userId
const deleteUser = async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }

  try {
    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch {
    res.status(500).json({ message: "Failed to delete user" });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};
