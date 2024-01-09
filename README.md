# NodeJS Boilerplate API

This is a NodeJS boilerplate project that contains the basic configuration for you to start developing your next REST API using:

-   NodeJS
-   Express
-   Typescript
-   Nodemon
-   Dotenv
-   TS-Node
-   Prettier
-   Eslint

## How to use it

-   Clone this repository
-   Insite root folder, execute **npm install**
-   In order to run the project in devlopment environment with watchmode, execute **npm run dev**

## How to setup Prisma from scratch

-   Execute **npx prisma init --datasource-provider mysql**: this will create **prisma/schema.prisma** in your project
-   If the database already exists, you can execute a **npx prisma db pull** and this will populate your Prisma schema with database schema
-   Create a migration directory executing **mkdir -p prisma/migrations/0_init**
-   Generate the migration script executing **npx prisma migrate diff --from-empty --to-schema-datamodel prisma/schema.prisma --script > prisma/migrations/0_init/migration.sql**
-   In order to install Prisma client, execute **npm install @prisma/client**
-   After that, you can generate the client executing **npx prisma generate**
-   If you want to have a seed file with default data for your database, you can have a seed.ts file inside **/prisma** directory with your data transactions and execute **npx prisma db seed**
-   More info: https://www.prisma.io/docs/orm/prisma-migrate/workflows/seeding#how-to-seed-your-database-in-prisma

### TODO

-   Centralize error handling
-   Add generic type to patch
-   Add docker
-   Add logger
