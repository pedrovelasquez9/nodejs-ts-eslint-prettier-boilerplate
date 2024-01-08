import { getAllBooks, createBook } from "../src/services/book";
import { prismaMock } from "../prismaSingleton";
import { Book } from "../src/interfaces/Book";

describe("tests books API services and it's integration with Prisma ORM", () => {
    it("should create a new Book record for the store", async () => {
        const book = {
            id: 1,
            title: "Relatos de (una) mente(s)",
            description: "Libro escrito por mi =)",
            author: "Pedro Plasencia",
            status: 1,
            created_by: "Pedro",
            created_at: new Date(),
            updated_by: null,
            updated_at: null,
        };

        prismaMock.book.create.mockResolvedValue(book);

        await expect(createBook(book)).resolves.toEqual(book);
    });

    it("should return a full list of Books", async () => {
        const book = [
            {
                id: 1,
                title: "Relatos de (una) mente(s)",
                description: "Libro escrito por mi =)",
                author: "Pedro Plasencia",
                status: 1,
                created_by: "Pedro",
                created_at: new Date(),
                updated_by: null,
                updated_at: null,
            },
        ];

        await prismaMock.book.findMany.mockResolvedValue(book);

        await expect(getAllBooks()).resolves.toStrictEqual(book);
    });
});
