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
    formatAmount: (params: number) => string
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {

    const formatAmount = (value:number) => {

        // const amount = 796
        // const result = signal + String((amount/100)*(-1)).replace('.',','))

        const signal = value<0?'- R$ ':'R$ '
        const numbered = value<0?Number((value/100)*(-1)):Number(value/100)
        let amount = signal + String(numbered.toFixed(2))
        return amount
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