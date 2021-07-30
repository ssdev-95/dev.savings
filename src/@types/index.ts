import { ReactNode, Dispatch, SetStateAction } from "react";

interface IProviderProps {
  children: ReactNode;
}

interface ITransaction {
  id?: string;
  description: string;
  amount: number;
  date: string;
  category: string;
}

interface ITransactionsData {
  transactions: ITransaction[];
  incomes: number;
  expenses: number;
  total: number;
  // formatAmount: (amount: number) => string;
  // refresh: () => void;
  // retrieveData: (data: ITransaction[]) => void;
  // createTransaction: (transaction: ITransaction) => Promise<void>;
  // updateTransaction: (id: string, transaction: ITransaction) => Promise<void>;
  // deleteTransaction: (id: string) => void;
  // formatDate: (date: string) => string;
}

// Auth types
interface IAuthContextData {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;

  loginWithGoogle: ()=>Promise<void>;
  loginWithGithub: ()=>Promise<void>;
  loginWithEmailAndPassword: (email: string, passphrase: string)=>Promise<void>;
  signUpWithEmailAndPassword: (email: string, passphrase: string)=>Promise<void>;
}

export type { IProviderProps, ITransaction, ITransactionsData, IAuthContextData }