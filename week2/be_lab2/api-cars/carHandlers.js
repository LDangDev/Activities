const Car = require("./carLib")

// GET

const getAllCars = (req, res) => {
    const cars = Car.getAll()
    res.json(cars)
}

// POST

const createCar = (req, res) => {
    const {model, color, age} = req.body

    const newCar = Car.addOne(model, color, age)

    if(newCar) {
        res.json(newCar)
    } else {
        res.status(500).json({ message: "Failed to create car"})
    }
}

// GET By ID

const getCarById = (req, res) => {
    const carId = req.params.carId
    const car = Car.findById(carId)
    if(car) {
        res.json(car)
    }else{
        res.status(404).json({ message: "Car not found"})
    }
}

// PUT

const updateCar = (req, res) => {
    const carId = req.params.carId

    const { model, color, age } = req.body

    const updateCar = Car.updateOneById(carId, { model, color, age })

    if(updateCar) {
        res.json(updateCar)
    } else{
        res.status(404).json({ message: "Car not found"})
    }
}

// DELETE

const deleteCar = (req, res) => {
    const carId = req.params.carId;
    console.log('Car ID:', carId);
    const isDeleted = Car.deleteOneById(carId);
  
    if (isDeleted) {
      res.json({ message: "Car deleted successfully" });
    } else {
      res.status(404).json({ message: "Car not found" });
    }
  };

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
  };

