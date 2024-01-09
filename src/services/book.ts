import prisma from "../client";
import { Book, BookData } from "../interfaces/Book";

export const getAllBooks = async (): Promise<BookData[]> => {
    return await prisma.book.findMany({
        where: { status: 1 },
        select: {
            id: true,
            title: true,
            author: true,
            description: true,
        },
    });
};

export const getBookByID = async (id: string): Promise<BookData | null> => {
    try {
        const recordId = parseInt(id);
        return await prisma.book.findUnique({
            where: {
                id: recordId,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const createBook = async (bookData: Book): Promise<BookData> => {
    try {
        return await prisma.book.create({
            data: bookData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const editBook = async (
    bookData: Book,
    id: string,
): Promise<BookData> => {
    try {
        const recordId = parseInt(id);
        return await prisma.book.update({
            where: {
                id: recordId,
            },
            data: bookData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteBook = async (id: string): Promise<BookData> => {
    try {
        const recordId = parseInt(id);
        return await prisma.book.update({
            where: {
                id: recordId,
            },
            data: {
                status: 0,
            },
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};
