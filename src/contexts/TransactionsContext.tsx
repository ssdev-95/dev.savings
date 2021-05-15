import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios'

import { TransactionsData, TransactionData, TransactionsProviderProps } from '@/types'

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

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Accept": "*",
            "Content-Type": "*"
        }
    }

    const deleteProduct = async (id: String) => {
        const res = await axios.delete(`http://localhost:3000/api/transactions/${id}`, config)

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
            formatDate,
            config
        }}>
            {children}
        </Transactions.Provider>
    )
}