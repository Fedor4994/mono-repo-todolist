import { Categorie } from './todos.type';

export interface FilterProps {
  search: string;
  isComplete: boolean;
  categorie: Categorie;
  setSearch: (search: string) => void;
  setIsCompleted: (completed: boolean) => void;
  setCategorie: (categorie: Categorie) => void;
}
