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
    transactions: TransactionData[],
    generateHash: (param1:string, param2:number, param3:string)=>string,
    formatAmount: (params: number) => void,
    addTransaction: (params: TransactionData)=>void,
    removeTransaction: (params: string) => void
}

export const Transactions = createContext({} as TransactionsData)

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {

    const addTransaction = transaction => {
        setTransactions([...transactions, transaction])
    }
    
    const removeTransaction = (id:string) => {
        const index = transactions.map(transaction=>{
            if(transaction.id==id) return transactions.indexOf(transaction)
        })[0]
        setTransactions(transactions.splice(index, 1))
    }

    const formatAmount = (value:number) => {
        let amount = String(value/100).replace(/('-')/,'$1 R$')
        return amount
    }

    const generateHash = (description, amount, date) => {
        const dateSplitted = date.split('-')
        return `${description}-${Math.random()+amount}${Math.random()+Number(dateSplitted[0]+dateSplitted[1]+dateSplitted[2])}`
    }

    const [transactions, setTransactions] = useState([
        {
            id: 'minhamae123',
            description: 'Mother gift',
            amount: 100025,
            date: '25/03/2020'
        },
        {
            id: 'meupai123',
            description: 'Father gift',
            amount: 300025,
            date: '25/03/2020'
        },
])

    const [incomes, setIncomes] = useState(0)

    const [expenses, setExpenses] = useState(0)

    const [total, setTotal] = useState(0)

    useEffect(()=>{
        setIncomes(0)
        setExpenses(0)
        setTotal(0)
        transactions.map(transaction=>{
            if(transactions.length>0) {
                const {amount} = transaction

                if(transaction.amount>0){setIncomes(incomes+amount)}

                if(transaction.amount<0){setExpenses(expenses+amount)}
            }
        })
        alert(transactions.length)
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
            generateHash,
            formatAmount,
            addTransaction,
            removeTransaction
        }}>
            {children}
        </Transactions.Provider>
    )
}