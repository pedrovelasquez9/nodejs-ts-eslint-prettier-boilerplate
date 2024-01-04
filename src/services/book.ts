import { PrismaClient } from "@prisma/client";
import { Book } from "../interfaces/Book";

const prisma = new PrismaClient();

export const getAllBooks = async (): Promise<Book[]> => {
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

export const createBook = async (bookData: Book): Promise<Book> => {
    try {
        return await prisma.book.create({
            data: bookData,
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const editBook = async (bookData: Book, id: number): Promise<Book> => {
    try {
        return await prisma.book.update({
            where: {
                id,
            },
            data: bookData,
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};

export const deleteBook = async (id: number): Promise<Book> => {
    try {
        return await prisma.book.update({
            where: {
                id,
            },
            data: {
                status: 0,
            },
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
};
