import { ReactNode } from "react";

interface ITransactionProviderProps {
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
  formatAmount: (amount: number) => string;
  refresh: () => void;
  retrieveData: (data: ITransaction[]) => void;
  createTransaction: (transaction: ITransaction) => Promise<void>;
  updateTransaction: (id: string, transaction: ITransaction) => Promise<void>;
  deleteTransaction: (id: string) => void;
  formatDate: (date: string) => string;
}

export { ITransactionProviderProps, ITransaction, ITransactionsData}