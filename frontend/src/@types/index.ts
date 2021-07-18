import { ReactNode } from 'react'

export interface CardProps {
    title: string;
    value: number;
}

export interface ProviderProps {
    children: ReactNode;
}

export interface NavigationData {
    component: number;
    goForward: ()=>void;
    goBackward: ()=>void;
}

export interface TransactionData {
    id?: string;
    description: string;
    amount: number;
    date: string;
    op: string;
}

export interface TransactionsData {
    transactions: TransactionData[],
    incomes: number,
    expenses: number,
    total: number,
    formatAmount: (amount: number) => string,
    refresh: () => void,
    retrieveData: (data: TransactionData[]) => void
    createTransaction: (transaction: TransactionData)=>Promise<void>
    updateTransaction: (id:string,transaction: TransactionData)=>Promise<void>
    deleteTransaction: (id: string) => void
    formatDate: (date:string) => string
}
