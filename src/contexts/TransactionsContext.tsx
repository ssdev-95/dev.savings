/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'

import { ITransactionsData, ITransaction, IProviderProps } from '../@types'

const ApiURI = 'https://610177d54e50960017c29e5a.mockapi.io/api/transactions'

const TransactionsContext = createContext({} as ITransactionsData)

function TransactionsProvider({ children }: IProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [total, setTotal] = useState(0)

    async function retrieveData() {
        const { data } = await axios.get(ApiURI)
        setTransactions(data[0].transactions)
    }

    useEffect(()=>{
        retrieveData()
    }, [])

    useEffect(()=>{
        setExpenses(0)
        
        setIncomes(0)

        transactions.forEach(item=>{
            if(item.category==='expense') setExpenses(expenses+1)

            if(item.category==='income') setIncomes(incomes+1)
        })
    }, [transactions])

    useEffect(()=>{
        setTotal(expenses+incomes)
    }, [expenses, incomes])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            incomes,
            expenses,
            total
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContext, TransactionsProvider }