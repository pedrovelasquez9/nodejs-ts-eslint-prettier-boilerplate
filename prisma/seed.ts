import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    await prisma.book.createMany({
        data: [
            {
                title: "The Hobbit",
                author: "JRR Tolkien",
                description: "awesome book",
                status: 1,
            },
            {
                title: "Harry Potter and the goblet of fire",
                author: "JK Rowling",
                description: "awesome book",
                status: 1,
            },
        ],
    });
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
