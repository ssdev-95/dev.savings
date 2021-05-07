import { createContext, ReactNode, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

interface TransactionData {
    id: string;
    description: string;
    amount: number;
    date: string;
    op: string;
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsData {
    incomes: number,
    expenses: number,
    total: number,
    formatAmount: (amount: number, op: string) => string,
    retrieveData: (data: TransactionData[]) => void
    deleteProduct: (id: string) => void
    formatDate: (date:string) => string
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const router = useRouter()

    const formatDate = (date:string) => {
        const formatedDate = date.split('-').reverse().join('/')

        return formatedDate
    }

    const formatAmount = (value: number, op: string) => {
        const signal = op === 'expense' ? '- R$ ' : 'R$ '
        const numbered = Number(value / 100)
        let amount = signal + String(numbered.toFixed(2))
        return amount.replace('.', ',')
    }

    const [incomes, setIncomes] = useState(0)

    const [expenses, setExpenses] = useState(0)

    const [total, setTotal] = useState(0)


    useEffect(() => {
        setTotal(incomes - expenses)
    }, [incomes, expenses])

    const retrieveData = (data: TransactionData[]) => {
        data.forEach(doc => {
            doc.op === 'expense' ? setExpenses(expenses + doc.amount) : setIncomes(incomes + doc.amount)
        })
    }

    const deleteProduct = async (id: String) => {
        const res = await fetch(`http://localhost:3000/api/transactions/${id}`, {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Accept": "*",
                "Content-Type": "*"
            }
        })

        console.log(res)

        router.push('/')
    }

    return (
        <Transactions.Provider value={{
            incomes,
            expenses,
            total,
            formatAmount,
            retrieveData,
            deleteProduct,
            formatDate
        }}>
            {children}
        </Transactions.Provider>
    )
}