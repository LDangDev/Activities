const express = require('express');
const router = express.Router();
const {
  getAllCars,
  getCarById,
  createCar,
  updateCar,
  deleteCar,
} = require('../controllers/carControllers');

const {
  middleware3,
  middleware4,
  middleware5,
  middlewareNoNext,
} = require('../middleware/customMiddlewares');

router.use(middleware3);

// GET /cars
router.get('/', getAllCars);


router.use(middleware4);

// POST /cars
router.post('/', createCar);

// GET /cars/:carId
router.get('/:carId',middleware5, getCarById);

// PUT /cars/:carId
router.put('/:carId', updateCar);

router.use(middlewareNoNext);

// DELETE /cars/:carId
router.delete('/:carId', deleteCar);

module.exports = router;
