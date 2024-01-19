import { Router } from "express";
import { router as BookRoutes } from "./books";
import { router as DocsRouter } from "./api-docs";

export const router = Router();
router.use("/books", BookRoutes);
router.use("/api-docs", DocsRouter);
