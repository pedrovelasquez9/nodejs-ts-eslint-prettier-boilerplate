import swaggerAutogen from "swagger-autogen";
const doc = {
    info: {
        title: "Bookstore API",
        description: "Bookstore boilerplate nodejs app",
    },
    host: "localhost:3000",
};

const outputFile = "./docs/swagger-output.json";
swaggerAutogen()(outputFile, ["./src/index.ts"], doc);
