import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { getAllBooks, createBook, editBook, deleteBook } from "./services/book";
import bodyParser from "body-parser";

const app: Express = express();
const DEFAULT_PORT = process.env.DEFAULT_PORT || 3000;

dotenv.config();
app.use(bodyParser.json());

app.get("/", async (request: Request, response: Response) => {
    response.send(await getAllBooks());
});

app.post("/book", async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await createBook(body));
    } catch (error) {
        response.send("error");
    }
});

app.patch("/book/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await editBook(body, parseInt(id)));
    } catch (error) {
        response.send("error");
    }
});

app.delete("/book/:id", async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await deleteBook(parseInt(id)));
    } catch (error) {
        response.send("error");
    }
});

app.listen(DEFAULT_PORT, () => {
    console.log(`Hello nodejs/express app on port ${DEFAULT_PORT} =)`);
});
