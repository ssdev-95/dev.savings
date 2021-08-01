/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { ITransactionsData, ITransaction, IProviderProps } from '../@types'
import { useAuth } from 'src/hooks/useAuth'

// const URI = 'https://610177d54e50960017c29e5a.mockapi.io/api/transactions'
const URI = process.env.REACT_APP_API_URI

const TransactionsContext = createContext({} as ITransactionsData)

function TransactionsProvider({ children }: IProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [total, setTotal] = useState(0)
    const [toUpdate, setToUpdate] = useState<ITransaction|null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const { token } = useAuth()

    async function retrieveData() {
        const { data } = await axios.get(`${URI}/users/transactions`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": token || ''
            }
        })

        if(!data) {
            alert('Sorry, no data yet! ;(')
        }

        console.log(data)

        // setTransactions(data[0].transactions)
    }

    function toggleModal(transaction:ITransaction|null=null) {
        setIsModalOpen(!isModalOpen)
        setToUpdate(transaction)
    }

    useEffect(()=>{
        if(token && token.trim()!=='') {
            retrieveData()
        }
    }, [])

    useEffect(()=>{
        setExpenses(0)
        
        setIncomes(0)

        transactions.forEach(item=>{
            if(item.category==='expense') {
                setExpenses(prev=>prev+item.amount)
            } else {
                setIncomes(prev=>prev+item.amount)
            }
        })
    }, [transactions])

    useEffect(()=>{
        setTotal(incomes-expenses)
    }, [expenses, incomes])

    return (
        <TransactionsContext.Provider value={{
            transactions,
            incomes,
            expenses,
            total,

            toUpdate,
            isModalOpen,
            toggleModal
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export { TransactionsContext, TransactionsProvider }