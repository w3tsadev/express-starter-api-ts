import request from "supertest";
import app from "../src/app";
import { describe, it } from "vitest";

describe("#app", () => {
  it("responds with a not found message", () => {
    return request(app)
      .get("/fake-route")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404);
  });
});
