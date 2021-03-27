import { createContext, ReactNode, useEffect, useState } from "react";
import {onRetrieve, onDelete} from '../pages/api/transactionsManager'
import {useCookies} from 'react-cookie'

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
    transactions: TransactionData[],
    formatAmount: (params: number) => string,
    removeTransaction: (params: string) => void,
    reload: ()=>void
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
    const [cookies, setCookies] = useCookies([])
    
    const removeTransaction = (id:string) => {
        onDelete(id)
        reload()
    }

    const reload = () => {
        setIncomes(0)
        setExpenses(0)
        setCookies('transactions', onRetrieve())
    }

    const formatAmount = (value:number) => {
        const signal = value<0?'- R$ ':'R$ '
        const numbered = value<0?Number((value/100)*(-1)):Number(value/100)
        let amount = signal+String(numbered.toFixed(2))
        return amount
    }

    const [transactions, setTransactions] = useState<TransactionData[]>([])
    
    const [incomes, setIncomes] = useState(0)

    const [expenses, setExpenses] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        reload()
    }, [])

    useEffect(()=>{
        //setTransactions(JSON.parse(cookies.transactions))
        console.log(cookies)
    },[cookies])

    useEffect(()=>{
        let entries = incomes
        let withdraws = expenses
        transactions.map(transaction => {
            let {amount} = transaction
            amount>=0 ? setIncomes(entries+amount) : setExpenses(withdraws+amount)
        })
    }, [transactions])

    useEffect(()=>{
        setTotal(incomes+expenses)
    }, [incomes, expenses])

    return (
        <Transactions.Provider value={{
            incomes,
            expenses,
            total,
            transactions,
            formatAmount,
            //addTransaction,
            removeTransaction,
            reload
        }}>
            {children}
        </Transactions.Provider>
    )
}