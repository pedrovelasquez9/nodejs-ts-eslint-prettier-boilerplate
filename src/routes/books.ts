import express, { Request, Response } from "express";
import {
    getAllBooks,
    createBook,
    editBook,
    deleteBook,
    getBookByID,
} from "../services/book";

export const router = express.Router();

router.get("/book", async (request: Request, response: Response) => {
    response.send(await getAllBooks());
});

router.get("/book/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await getBookByID(id));
    } catch (error) {
        response.send("error");
    }
});

router.post("/book", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createBook(body));
    } catch (error) {
        response.send("error");
    }
});

router.patch("/book/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editBook(body, id));
    } catch (error) {
        response.send("error");
    }
});

router.delete("/book/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await deleteBook(id));
    } catch (error) {
        response.send("error");
    }
});
