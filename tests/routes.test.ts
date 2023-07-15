import request from "supertest";
import app from "../src/app";
import { describe, it } from "vitest";

describe("GET /api/v1", () => {
  it("responds with a json message", () => {
    return request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, {
        message: "Root API",
      });
  });
});
