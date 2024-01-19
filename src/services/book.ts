import { Book, BookData } from "../types/Book";
import * as db from "../db/books";

export const getAllBooks = (): Promise<BookData[]> => {
    try {
        return db.getAllBooks();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getBookByID = (id: string): Promise<BookData | null> => {
    try {
        const recordId = Number(id);
        return db.getBookByID(recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createBook = (bookData: Book): Promise<BookData> => {
    try {
        return db.createBook(bookData);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const editBook = (bookData: Book, id: string): Promise<BookData> => {
    try {
        const recordId = Number(id);
        return db.editBook(bookData, recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteBook = (id: string): Promise<BookData> => {
    try {
        const recordId = Number(id);
        return db.deleteBook(recordId);
    } catch (error) {
        console.error(error);
        throw error;
    }
};
