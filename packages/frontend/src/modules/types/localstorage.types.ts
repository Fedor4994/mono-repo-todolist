export interface ILocalStorageResult {
  value: any;
  error: Error | null;
}

export type TSetValueFunction = (value: any) => void;

export type TRemoveValue = () => void;
