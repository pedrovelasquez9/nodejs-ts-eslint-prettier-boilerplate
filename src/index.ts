import express, { Express } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { router } from "./routes";
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/swagger-output.json");

const app: Express = express();
const DEFAULT_PORT = process.env.DEFAULT_PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

app.use("/", router);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(DEFAULT_PORT, () => {
    console.log(`Hello nodejs/express app on port ${DEFAULT_PORT} =)`);
});
