const request = require("supertest");
const server = require("./server");
const User = require("../models/users-model");

const user = {
  username: "test1",
  password: "password"
}

describe("server.js", () => {
  describe("index route", () => {
    it("should return an OK status code from the index route", async () => {
      const expectedStatusCode = 200;
      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    it("should return a JSON object fron the index route", async () => {
      const expectedBody = {message:"Welcome to Airbnb Optimal price"}

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedBody);
    });

    it("should return a JSON object fron the index route", async () => {
      const response = await request(server).get("/");

      expect(response.type).toEqual('application/json');
    });
    
    it("should return a response status 200 from the /login route", async () => {
      const response = await request(server).post("/login").send(user);

      expect(response.status).toEqual(200);
    });
  });
});
