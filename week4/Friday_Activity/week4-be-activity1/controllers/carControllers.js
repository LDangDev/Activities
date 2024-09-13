const Car = require("../models/carModel");

// GET /cars
const getAllCars = async (req, res) => {
  const cars = await Car.find({}).sort({ createdAt: -1 });
  res.status(200).json(cars);
};

// POST /cars
const createCar = async (req, res) => {
  const newCar = await Car.create({ ...req.body });
  res.status(201).json(newCar);
};

// GET /cars/:carId
const getCarById = async (req, res) => {
  const { carId } = req.params;

  const car = await Car.findById(carId);
  if (car) {
    res.status(200).json(car);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// PUT /cars/:carId
const updateCar = async (req, res) => {
  const { carId } = req.params;

  const updatedCar = await Car.findOneAndUpdate(
    { _id: carId },
    { ...req.body },
    { new: true, overwrite: true }
  );
  if (updatedCar) {
    res.status(200).json(updatedCar);
  } else {
    res.status(404).json({ message: "Car not found" });
  }
};

// DELETE /cars/:carId
const deleteCar = async (req, res) => {
  const { carId } = req.params;

  const deletedCar = await Car.findOneAndDelete({ _id: carId });
  if (deletedCar) {
    res.status(200).json({ message: "Car deleted successfully" });
  } else {
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
