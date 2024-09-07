const Car = require("../models/carModel");

// GET /cars
const getAllCars = (req, res) => {
  const cars = Car.getAll();
  res.json(cars);
};

// POST /cars
const createCar = (req, res) => {
  console.log("body",req.body);
  
  const newCar = Car.addOne({ ...req.body }); // Spread the req.body object

  if (newCar) {
    res.json(newCar);
  } else {
    // Handle error (e.g., failed to create car)
    res.status(500).json({ message: "Failed to create car" });
  }
};

// GET /cars/:carId
const getCarById = (req, res) => {
  const carId = req.params.carId;
  const car = Car.findById(carId);
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// PUT /cars/:carId
const updateCar = (req, res) => {
  const carId = req.params.carId;
  const updatedCar = Car.updateOneById(carId, { ...req.body }); // Spread the req.body object

  if (updatedCar) {
    res.json(updatedCar);
  } else {
    // Handle update failure (e.g., car not found)
    res.status(404).json({ message: "Car not found" });
  }
};

// DELETE /cars/:carId
const deleteCar = (req, res) => {
  const carId = req.params.carId;
  const isDeleted = Car.deleteOneById(carId);

  if (isDeleted) {
    res.json({ message: "Car deleted successfully" });
  } else {
    // Handle deletion failure (e.g., car not found)
    res.status(404).json({ message: "Car not found" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
};
