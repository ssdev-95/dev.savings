import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionData {
    id: string;
    description: string;
    amount: number;
    date: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsData{
    incomes: number,
    expenses: number,
    total: number,
    formatAmount: (amount: number, op: string) => string
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {

    const formatAmount = (value:number, op: string) => {
        const signal = op==='expense'?'- R$ ':'R$ '
        const numbered = Number(value/100)
        let amount = signal + String(numbered.toFixed(2))
        return amount.replace('.',',')
    }

    const [incomes, setIncomes] = useState(0)

    const [expenses, setExpenses] = useState(0)

    const [total, setTotal] = useState(0)


    useEffect(()=>{
        setTotal(incomes+expenses)
    }, [incomes, expenses])

    return (
        <Transactions.Provider value={{
            incomes,
            expenses,
            total,
            formatAmount
        }}>
            {children}
        </Transactions.Provider>
    )
}