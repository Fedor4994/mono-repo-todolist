export interface ITodo {
    title: string;
    description: string;
    isCompleted?: boolean;
    isPrivate?: boolean;
}
export interface TodosQuery {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    categorie?: Categorie;
}
export declare enum Categorie {
    Public = "public",
    Private = "private",
    All = "all"
}
