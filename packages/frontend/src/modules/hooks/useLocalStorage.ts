import { useState } from 'react';
import { ILocalStorageResult, TSetValueFunction } from '../types/localstorage.types';

export const useLocalStorage = (
  key: string,
  initialValue: string | null
): [Partial<ILocalStorageResult>, Partial<TSetValueFunction>, () => void] => {
  const [result, setResult] = useState<Partial<ILocalStorageResult>>(() => {
    try {
      const item = localStorage.getItem(key);
      return { value: item ? JSON.parse(item) : initialValue, error: null };
    } catch (error: any) {
      return { value: initialValue, error };
    }
  });

  const setValue: TSetValueFunction = (value: string) => {
    try {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
      }
      setResult({ value, error: null });
    } catch (error: any) {
      setResult({ value: null, error });
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);
      setResult({ value: null, error: null });
    } catch (error: any) {
      setResult({ value: null, error });
    }
  };

  return [result, setValue, removeValue];
};
