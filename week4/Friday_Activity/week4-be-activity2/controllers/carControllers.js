const Car = require("../models/carModel");
const mongoose = require("mongoose");

// GET /cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({}).sort({ createdAt: -1 });
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
};

// POST /cars
const createCar = async (req, res) => {
  try {
    const newCar = await Car.create({ ...req.body });
    res.status(201).json(newCar);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Failed to create car", error: error.message });
  }
};

// GET /cars/:carId
const getCarById = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const car = await Car.findById(carId);
    if (car) {
      res.status(200).json(car);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve car" });
  }
};

// PUT /cars/:carId
const updateCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to update car" });
  }
};

// PATCH /cars/:carId - Refactored to act as PATCH
const patchCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const updatedCar = await Car.findOneAndUpdate(
      { _id: carId },
      { ...req.body },
      { new: true } // Removed `overwrite: true` to act like PATCH
    );
    if (updatedCar) {
      res.status(200).json(updatedCar);
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to update car" });
  }
};

// DELETE /cars/:carId
const deleteCar = async (req, res) => {
  const { carId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(carId)) {
    return res.status(400).json({ message: "Invalid car ID" });
  }

  try {
    const deletedCar = await Car.findOneAndDelete({ _id: carId });
    if (deletedCar) {
      res.status(200).json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Failed to delete car" });
  }
};

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  patchCar,
  deleteCar,
};
