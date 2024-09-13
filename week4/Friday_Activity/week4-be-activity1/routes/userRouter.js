const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  // patchCar
} = require("../controllers/userControllers");

// GET /users
router.get("/", getAllUsers);

// POST /users
router.post("/", createUser);

// GET /users/:blogId
router.get("/:blogId", getUserById);

// PUT /users/:blogId
router.put("/:blogId", updateUser);

// DELETE /users/:blogId
router.delete("/:blogId", deleteUser);

// Update car using PATCH 
// router.patch('/:blogId', patchCar)

module.exports = router;
