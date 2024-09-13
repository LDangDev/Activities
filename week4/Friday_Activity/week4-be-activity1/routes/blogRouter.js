const express = require("express");
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  // patchCar
} = require("../controllers/blogControllers");

// GET /cars
router.get("/", getAllBlogs);

// POST /cars
router.post("/", createBlog);

// GET /cars/:blogId
router.get("/:blogId", getBlogById);

// PUT /cars/:blogId
router.put("/:blogId", updateBlog);

// DELETE /cars/:blogId
router.delete("/:blogId", deleteBlog);

// Update car using PATCH 
// router.patch('/:blogId', patchCar)

module.exports = router;
