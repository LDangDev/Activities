const express = require("express");
const router = express.Router();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourControllers"); 



// GET /tours
router.get("/", getAllTours);

// POST /tours
router.post("/", createTour);

// GET /tours/:tourId
router.get("/:tourId", getTourById);

// PUT /tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;