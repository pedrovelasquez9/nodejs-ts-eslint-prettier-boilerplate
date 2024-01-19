import prisma from "../client";
import { Book, BookData } from "../types/Book";

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

export const getBookByID = async (id: number): Promise<BookData | null> => {
    try {
        return await prisma.book.findUnique({
            where: {
                id,
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
    id: number,
): Promise<BookData> => {
    try {
        return await prisma.book.update({
            where: {
                id,
            },
            data: bookData,
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const deleteBook = async (id: number): Promise<BookData> => {
    try {
        return await prisma.book.update({
            where: {
                id,
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
