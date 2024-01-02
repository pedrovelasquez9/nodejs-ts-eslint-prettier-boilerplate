import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
const DEFAULT_PORT = process.env.DEFAULT_PORT || 3000;

app.get("/", (request: Request, response: Response) => {
    response.send("Welcome to my NodeJS+Express API =)");
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Hello nodejs/express app on port ${DEFAULT_PORT} =)`);
});
