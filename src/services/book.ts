import { Book, BookData } from "../types/Book";
import * as db from "../db/books";

export const getAllBooks = async (): Promise<BookData[]> => {
    try {
        return await db.getAllBooks();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBookByID = async (id: string): Promise<BookData | null> => {
    try {
        const recordId = Number(id);
        return await db.getBookByID(recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createBook = async (bookData: Book): Promise<BookData> => {
    try {
        return await db.createBook(bookData);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editBook = async (
    bookData: Book,
    id: string,
): Promise<BookData> => {
    try {
        const recordId = Number(id);
        return await db.editBook(bookData, recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteBook = async (id: string): Promise<BookData> => {
    try {
        const recordId = Number(id);
        return await db.deleteBook(recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};
