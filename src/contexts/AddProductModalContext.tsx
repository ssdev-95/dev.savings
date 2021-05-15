import { createContext, ReactNode, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

import { AddProductModalContextData, AddProductModalContextProviderProps } from '@/types'

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export const AddProductModalContextProvider = ({ children }: AddProductModalContextProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const router = useRouter()

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const submit = async (data: any) => {
        const { description, amount, date } = data
        const op = amount >= 0 ? 'income' : 'expense'

        const transaction = {
            description: String(description),
            amount: Number(amount * (-100)),
            date: String(date),
            op: String(op)
        }

        const res = await axios.post('http://localhost:3000/api/transactions', transaction)

        console.log(res)

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
