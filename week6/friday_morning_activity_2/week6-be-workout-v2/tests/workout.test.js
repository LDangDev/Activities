const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);
const User = require("../models/userModel");
const Workout = require("../models/workoutModel");
const workouts = require("./data/workouts.js");

let token = null;
let workoutId = null;

beforeAll(async () => {
  await User.deleteMany({});
  const result = await api
    .post("/api/user/signup")
    .send({ email: "mattiv@matti.fi", password: "R3g5T7#gh" });
  token = result.body.token;
});

describe("Workouts API tests", function () {
  describe("when there is initially some workouts saved", () => {
    beforeEach(async () => {
      await Workout.deleteMany({});
      const workout1 = await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[0]);
      workoutId = workout1.body._id;
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(workouts[1]);
    });

    test("Workouts are returned as json", async () => {
      await api
        .get("/api/workouts")
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);
    });

    test("New workout added successfully", async () => {
      const newWorkout = {
        title: "testworkout",
        reps: 10,
        load: 100,
      };
      await api
        .post("/api/workouts")
        .set("Authorization", "bearer " + token)
        .send(newWorkout)
        .expect(201);
    });

    // Test DELETE a single workout
    test("Delete a workout", async () => {
      await api
        .delete(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(200);

      // Verify the workout is deleted
      const response = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token);
      expect(response.status).toBe(404);
    });

    // Test UPDATE a single workout
    test("Update a workout", async () => {
      const updatedWorkout = {
        title: "Updated Workout",
        reps: 15,
        load: 150,
      };

      await api
        .patch(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .send(updatedWorkout)
        .expect(200);

      // Verify the workout is updated
      const response = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token);
      expect(response.body.title).toBe("Updated Workout");
      expect(response.body.reps).toBe(15);
      expect(response.body.load).toBe(150);
    });

    // Test READ a single workout
    test("Read a single workout", async () => {
      const response = await api
        .get(`/api/workouts/${workoutId}`)
        .set("Authorization", "bearer " + token)
        .expect(200)
        .expect("Content-Type", /application\/json/);

      expect(response.body._id).toBe(workoutId);
      expect(response.body).toHaveProperty("title");
      expect(response.body).toHaveProperty("reps");
      expect(response.body).toHaveProperty("load");
    });
  });
});

afterAll(() => {
  mongoose.connection.close();
});