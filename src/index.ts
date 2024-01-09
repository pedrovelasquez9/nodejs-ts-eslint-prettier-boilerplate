import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes";

const app: Express = express();
const DEFAULT_PORT = process.env.DEFAULT_PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

app.use("/", router);

app.listen(DEFAULT_PORT, () => {
    console.log(`Hello nodejs/express app on port ${DEFAULT_PORT} =)`);
});
