import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'
import axios from 'axios'

import { TransactionsData, TransactionData, TransactionsProviderProps } from '@/types'

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
    const router = useRouter()

    const refresh = () => {
        setExpenses(0)
        setIncomes(0)
    }

    const formatDate = (date:string) => {
        const formatedDate = date.split('-').reverse().join('/')

        return formatedDate
    }

    const formatAmount = (value: number) => {
        let amount = `R$ ${Number(value / 100).toFixed(2)}`
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
            doc.op === 'expense' ?
            setExpenses(expenses => expenses + doc.amount) :
            setIncomes(incomes => incomes + doc.amount)
        })
    }

    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Accept": "*",
            "Content-Type": "*"
        }
    }


    const createTransaction = async (transaction: TransactionData) => {
        const port = process.env.PORT
        await axios.post(`http://localhost:${port}/api/transactions`, transaction)
    }

    const updateTransaction = async (id:string, transaction: TransactionData) => {
        const uri = `http://localhost:${process.env.PORT}/api/transactions/${id}`

        await axios.put(uri, transaction)
    }

    const deleteTransaction = async (id: String) => {
        const uri = `http://localhost:${process.env.PORT}/api/transactions/${id}`
        
        await axios.delete(uri, config)

        router.push('/')
    }

    return (
        <Transactions.Provider value={{
            incomes,
            expenses,
            total,
            formatAmount,
            refresh,
            retrieveData,
            createTransaction,
            updateTransaction,
            deleteTransaction,
            formatDate,
            config
        }}>
            {children}
        </Transactions.Provider>
    )
}

export const readTransactions = async (uri:string) => {
    const res = await axios.get(uri)

    const list = await res.data

    const transactions:TransactionData[] = list.body.map((doc:any)=>{
        return {
          id: doc._id,
          description: doc.description,
          op: doc.op,
          amount: doc.amount,
          date: doc.date
        }
    })

    return transactions
}
