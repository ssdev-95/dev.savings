import { createContext, ReactNode, useEffect, useState } from "react";
import {onRetrieve, onDelete} from '../pages/api/transactionsManager'

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
    //addTransaction: (params: TransactionData)=>void,
    removeTransaction: (params: string) => void
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {

    /*const addTransaction = () => {
        setTransactions(onDelete())
    }*/
    
    const removeTransaction = (id:string) => {
        onDelete(id)
    }

    const reload = () => {
        setIncomes(0)
        setExpenses(0)
        setTransactions([])
    }

    const formatAmount = (value:number) => {
        const signal = value<0?'- R$ ':'R$ '
        const numbered = value<0?Number((value/100)*(-1)):Number(value/100)
        let amount = signal+String(numbered.toFixed(2))
        return amount
    }

    /*const generateHash = (description, amount, date) => {
        const descriptionSplitted = description
                                            .split(' ')
                                            .toString()
                                            .replace(/\,/, '')
                                            .toLowerCase()
        const dateSplitted = date.split('-')
        return `${descriptionSplitted}-${Math.random()+amount}${Math.random()+Number(Number(dateSplitted[0])+Number(dateSplitted[1])+Number(dateSplitted[2]))}`
    }*/

    const [transactions, setTransactions] = useState<TransactionData[]>([])
    
    const [incomes, setIncomes] = useState(0)

    const [expenses, setExpenses] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        //reload()
        setTransactions(onRetrieve())
    }, [])

    useEffect(()=>{
        let entries = incomes
        let withdraws = expenses
        transactions.map(transaction => {
            let {amount} = transaction
            amount>=0 ? setIncomes(entries+amount) :setExpenses(withdraws+amount)
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
            removeTransaction
        }}>
            {children}
        </Transactions.Provider>
    )
}