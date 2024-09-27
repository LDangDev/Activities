const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const Workout = require("../models/workoutModel");

const initialWorkouts = [
  { title: "test workout 1", reps: 11, load: 101 },
  { title: "test workout 2", reps: 12, load: 102 },
];

// Helper function to fetch workouts from the database
const workoutsInDb = async () => {
  const workouts = await Workout.find({});
  return workouts.map(workout => workout.toJSON());
};

// Reset database before each test
beforeEach(async () => {
  await Workout.deleteMany({});
  await Workout.insertMany(initialWorkouts);
});

describe("Workout API Tests", () => {
  // Test suite for retrieving workouts
  describe("Initial saved workouts", () => {
    test("should return all workouts", async () => {
      const response = await api.get("/api/workouts");

      expect(response.body).toHaveLength(initialWorkouts.length);
    });

    test("should contain a specific workout in the returned list", async () => {
      const response = await api.get("/api/workouts");

      const titles = response.body.map(workout => workout.title);
      expect(titles).toContain("test workout 2");
    });

    test("should return workouts as JSON", async () => {
      await api
        .get("/api/workouts")
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });
  });

  // Test suite for adding workouts
  describe("Adding new workouts", () => {
    test("should successfully add a new workout", async () => {
      const newWorkout = {
        title: "test workout x",
        reps: 19,
        load: 109,
      };

      await api
        .post("/api/workouts")
        .send(newWorkout)
        .expect(201);
    });

    test("should add a valid workout and increase the count", async () => {
      const newWorkout = {
        title: "Situps",
        reps: 25,
        load: 10,
      };

      await api
        .post("/api/workouts")
        .send(newWorkout)
        .expect(201)
        .expect("Content-Type", /application\/json/);

      const response = await api.get("/api/workouts");
      const titles = response.body.map(workout => workout.title);

      expect(response.body).toHaveLength(initialWorkouts.length + 1);
      expect(titles).toContain("Situps");
    });

    test("should not add a workout without a title", async () => {
      const invalidWorkout = {
        reps: 23,
      };

      await api
        .post("/api/workouts")
        .send(invalidWorkout)
        .expect(400);

      const response = await api.get("/api/workouts");
      expect(response.body).toHaveLength(initialWorkouts.length);
    });
  });

  // Test suite for deleting workouts
  describe("Deleting workouts", () => {
    test("should delete a workout successfully", async () => {
      const workoutsAtStart = await workoutsInDb();
      const workoutToDelete = workoutsAtStart[0];

      await api
        .delete(`/api/workouts/${workoutToDelete.id}`)
        .expect(204);

      const workoutsAtEnd = await workoutsInDb();
      expect(workoutsAtEnd).toHaveLength(initialWorkouts.length - 1);

      const titles = workoutsAtEnd.map(workout => workout.title);
      expect(titles).not.toContain(workoutToDelete.title);
    });
  });
});

// Close the database connection after all tests
afterAll(() => {
  mongoose.connection.close();
});
