import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { Transactions } from '@/contexts/TransactionsContext'

import { AddProductModalContextData, AddProductModalContextProviderProps } from '@/types'

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export const AddProductModalContextProvider = ({ children }: AddProductModalContextProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()
    const { createTransaction } = useContext(Transactions)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const submit = async (data: any) => {
        const { description, amount, date } = data
        const op = amount >= 0 ? 'income' : 'expense'

        const transaction = {
            description: String(description),
            amount: Number(amount * (-100)),
            op: String(op),
            date: String(date)
        }

        await createTransaction(transaction)

        router.push('/')

        toggleModal()
    }

    return (
        <AddProductModalContext.Provider value={{
            submit,
            toggleModal,
            isModalOpen
        }}>
            {children}
        </AddProductModalContext.Provider>
    )
}
