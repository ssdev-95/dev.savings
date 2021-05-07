import {ReactNode, createContext, useState, useContext} from 'react'
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'

interface UpdateProductModalContextData {
    isUpdateModalOpen: boolean;
    mem: {
        name: string,
        value: number,
        when: string
    };
    get: (val1:string, val2: number, val3:string)=>void
    toggleUpdateModal: (id: string)=>void;
    update: (params: any)=>void;
}

interface UpdateProductContextProviderProps {
    children : ReactNode
}

export const UpdateProductModalContext = createContext({} as UpdateProductModalContextData)

export const UpdateProductContextProvider = ({children}: UpdateProductContextProviderProps) => {
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [mem, setMem] = useState({name:'', value:0, when:''})
    const router = useRouter()

    const toggleUpdateModal = (_id) => {
        window
            .addEventListener('click', event  => event.preventDefault())
        setTransactionId(_id)
        setIsUpdateModalOpen(!isUpdateModalOpen)
    }

    const update = async (data:any) =>  {
        const {description, amount, date} = data
        const op = amount>=0?'income':'expense'
        const updated = {
            description: description,
            amount: amount*(-100),
            op: op,
            date: date
        }
        
        const res = await fetch(`http://localhost:3000/api/transactions/${transactionId}`, {
            method: 'PUT',
            headers:{
                'Access-Control-Allow-Origin' : '*',
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updated)
        })

        console.log(res)

        toggleUpdateModal('')
        router.push('/')
    }

    const get = (name:string, value:number, when:string) => setMem({
        name,
        value,
        when
    })

    return (
        <UpdateProductModalContext.Provider value={{
            isUpdateModalOpen,
            toggleUpdateModal,
            mem,
            get,
            update
        }}>
            {children}
        </UpdateProductModalContext.Provider>
    )
}