const index = require("./index");
const supertest = require("supertest");
const request = supertest(index);

describe("/test endpoint", () => {
  it("should return a response", async () => {
    const response = await request.get("/test");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
