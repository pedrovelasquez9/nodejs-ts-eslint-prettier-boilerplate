import { Router } from "express";
import * as controller from "../controllers/books";

export const router = Router();

router.get("/", controller.getAllBooks);

router.get("/:id", controller.getBookByID);

router.post("/", controller.createBook);

router.patch("/:id", controller.editBook);

router.delete("/:id", controller.removeBook);
