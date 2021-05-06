import {createContext, ReactNode, useState} from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

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
    const router = useRouter()

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen)
    }

    const submit = async (data:any) => {
        const { description, amount, date } = data
        const op = amount>=0 ? 'income' : 'expense'

        const transaction = {
            description: String(description),
            amount: Number(amount*(-100)),
            date: String(date),
            op: String(op)
        }

        try{
            const res = await fetch('http://localhost:3000/api/transactions', {
                method: 'post',
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(transaction)
            })

            console.log(res)
            
            router.push('/')
        } catch(err) {
            console.log(err)
        }

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
