export interface Book {
    id: number;
    title: string;
    author: string;
    description: string;
    status?: number | null;
    created_by?: string | null;
    created_at?: Date | null;
    updated_by?: string | null;
    updated_at?: Date | null;
}
