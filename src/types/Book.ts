import { Tracking } from "./Tracking";

export type BookData = {
    id: number;
    title: string;
    author: string;
    description: string;
    status?: number | null;
};

export type Book = BookData & Tracking;
