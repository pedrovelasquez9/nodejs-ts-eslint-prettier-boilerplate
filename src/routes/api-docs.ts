import { Router } from "express";
export const router = Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../docs/swagger-output.json");

router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocument));
