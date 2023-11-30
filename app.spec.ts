import app from "./src/app";
import { calculateSum } from "./src/utils";
import request from "supertest";

describe("App", () => {
    it("should calculate sum", () => {
        const sum = calculateSum(2, 4);
        expect(sum).toBe(6);
    });

    it("should return 200 status", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
