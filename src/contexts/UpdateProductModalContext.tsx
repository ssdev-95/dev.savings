import {ReactNode, createContext, useState, useContext} from 'react'
import { Transactions } from './TransactionsContext'

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
    const {reload} = useContext(Transactions)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const [mem, setMem] = useState({name:'', value:0, when:''})

    const toggleUpdateModal = (_id) => {
        window
            .addEventListener('click', event  => event.preventDefault())
        setTransactionId(_id)
        setIsUpdateModalOpen(!isUpdateModalOpen)
    }

    const update = data =>  {
        const {description, amount, date} = data
        
       console.log(`${description} ${amount} ${date}`)

        toggleUpdateModal('')
        reload()
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