const {
  dogs,
  addOne,
  findById,
  updateOne,
  deleteOne,
} = require("./utilties.js");

// GET /dogs
const getAllDogs = (req, res) => {
  res.json(dogs);
};

// POST /dogs
const createDog = (req, res) => {
  const name = req.body.name;
  const newDog = addOne(name);
  res.json(newDog);
};

// GET /dogs/:dogId
const getDogById = (req, res) => {
  const dogId = req.params.dogId;
  const dog = findById(dogId);
  res.json(dog);
};

// PUT /dogs/:dogId
const updateDog = (req, res) => {
  const name = req.body.name;
  const dogId = req.params.dogId;

  const updatedDog = updateOne(dogId, name);

  if (updatedDog) {
    res.json(updatedDog);
  } else {
    // Handle update failure (e.g., dog not found)
    res.status(404).json({ message: "Dog not found" });
  }
};

// DELETE /dogs/:dogId
const deleteDog = (req, res) => {
  const dogId = req.params.dogId;

  const isDeleted = deleteOne(dogId);

  if (isDeleted) {
    res.json({ message: "Dog deleted successfully" });
  } else {
    // Handle deletion failure (e.g., dog not found)
    res.status(404).json({ message: "Dog not found" });
  }
};

module.exports = {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
};
