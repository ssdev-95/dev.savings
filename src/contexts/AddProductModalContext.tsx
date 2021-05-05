import React, {createContext, ReactNode, useContext, useState} from 'react'
import { Transactions } from './TransactionsContext'

interface AddProductModalContextData {
    submit: (data) => void;
    toggleModal: () => void;
    isModalOpen: boolean;
}

interface AddProductModalContextProviderProps {
    children: ReactNode;
}

export const AddProductModalContext = createContext({} as AddProductModalContextData)

export const AddProductModalContextProvider = ({children}: AddProductModalContextProviderProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const {reload} = useContext(Transactions)

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const submit = (data) => {
        console.log(`{
            description: ${data.description},
            amount: ${Number(data.amount)*100},
            date: ${data.date}
        }`)
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
