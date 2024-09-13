const express = require("express");
const router = express.Router();
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
  // patchCar
} = require("../controllers/carControllers");

// GET /cars
router.get("/", getAllCars);

// POST /cars
router.post("/", createCar);

// GET /cars/:carId
router.get("/:carId", getCarById);

// PUT /cars/:carId
router.put("/:carId", updateCar);

// DELETE /cars/:carId
router.delete("/:carId", deleteCar);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;
