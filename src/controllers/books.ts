import { Request, Response } from "express";
import * as service from "../services/book";

export const getAllBooks = async (_request: Request, response: Response) => {
    response.send(await service.getAllBooks());
};

export const getBookByID = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await service.getBookByID(id));
    } catch (error) {
        response.send("error");
    }
};

export const createBook = async (request: Request, response: Response) => {
    try {
        const { body } = request;
        response.send(await service.createBook(body));
    } catch (error) {
        response.send("error");
    }
};

export const editBook = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        const { body } = request;
        response.send(await service.editBook(body, id));
    } catch (error) {
        response.send("error");
    }
};

export const removeBook = async (request: Request, response: Response) => {
    try {
        const { id } = request.params;
        response.send(await service.deleteBook(id));
    } catch (error) {
        response.send("error");
    }
};
