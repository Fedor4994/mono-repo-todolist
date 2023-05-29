export interface ITodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isPrivate: boolean;
}

export interface ITodoData {
  title: string;
  description: string;
  isCompleted?: boolean;
  isPrivate?: boolean;
}
export interface TodosQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: boolean;
  categorie?: Categorie;
}

export enum Categorie {
  Public = 'public',
  Private = 'private',
  All = 'all'
}
