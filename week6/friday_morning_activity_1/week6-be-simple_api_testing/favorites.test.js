import { request, expect } from "./config.js";

const authToken = "Bearer token=5XwHCKAW5TNWHPzGXyLBeHCf"

describe("Favorites Airports API", function () {
  describe("GET /favorites", function () {
    describe("Before GET all favorites airports", function () {
      it("requires authentication", async function () {
        const response = await request.post("/favorites").send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

        expect(response.status).to.eql(401);
      });

      it("allows a user to get their favorite airports", async function () {
        const postResponse = await request
          .get("/favorites")
          .set("Authorization", authToken);
        expect(postResponse.status).to.eql(200);
      });
    });
  });
});

describe("POST /favorites", function () {
  describe("Before allow to POST favorites airports", function () {
    it("requires authentication", async function () {
      const response = await request.post("/favorites").send({
        airport_id: "YBR",
        note: "Going to Canada",
      });

      expect(response.status).to.eql(401);
    });

    it("allows a user to save and delete their favorite airports", async function () {
      const postResponse = await request
        .post("/favorites")
        .set("Authorization", authToken)
        .send({
          airport_id: "YBR",
          note: "Going to Canada",
        });

      // Log the response body for debugging
      // if (postResponse.status !== 201) {
      //   console.log("POST /favorites response body:", postResponse.body);
      // }

      expect(postResponse.status).to.eql(201);
      expect(postResponse.body.data.attributes.airport.name).to.eql(
        "Brandon Municipal Airport"
      );
      expect(postResponse.body.data.attributes.note).to.eql("Going to Canada");

      const favoriteId = postResponse.body.data.id;

      const putResponse = await request
        .put(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=5XwHCKAW5TNWHPzGXyLBeHCf")
        .send({
          note: "My usual layover when visiting family and friends",
        });

      expect(putResponse.status).to.eql(200);
      expect(putResponse.body.data.attributes.note).to.eql(
        "My usual layover when visiting family and friends"
      );

      const deleteResponse = await request
        .delete(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=5XwHCKAW5TNWHPzGXyLBeHCf");

      expect(deleteResponse.status).to.eql(204);

      const getResponse = await request
        .get(`/favorites/${favoriteId}`)
        .set("Authorization", "Bearer token=5XwHCKAW5TNWHPzGXyLBeHCf");

      expect(getResponse.status).to.eql(404);
    });
  });
});
