const express = require("express");
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Workouts
 *   description: API endpoints for managing workouts
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Workout:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         reps:
 *           type: integer
 *         load:
 *           type: integer
 *       required:
 *         - title
 *         - reps
 *         - load
 *       example:
 *         title: Push ups
 *         reps: 40
 *         load: 5
 */

// GET all workouts
/**
 * @swagger
 * /workouts:
 *   get:
 *     summary: Get all workouts
 *     tags: [Workouts]
 *     responses:
 *       200:
 *         description: Returns an array of all workouts
 *       500:
 *         description: Internal server error
 */
router.get("/", getWorkouts);

// GET a single workout
/**
 * @swagger
 * /workouts/{id}:
 *   get:
 *     summary: Get a single workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a single workout
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.get("/:id", getWorkout);

// POST a new workout
/**
 * @swagger
 * /workouts:
 *   post:
 *     summary: Create a new workout
 *     tags: [Workouts]
 *     requestBody:
 *       description: New workout object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post("/", createWorkout);

// DELETE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   delete:
 *     summary: Delete a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Workout deleted successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.delete("/:id", deleteWorkout);

// UPDATE a workout
/**
 * @swagger
 * /workouts/{id}:
 *   patch:
 *     summary: Update a workout by ID
 *     tags: [Workouts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the workout to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated workout object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Workout'
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.patch("/:id", updateWorkout);

module.exports = router;