import { ReactNode } from 'react'

export interface RequestConfigs {
    headers: {
        'Access-Control-Allow-Origin': string;
        "Accept": string;
        "Content-Type": string;
    }
}

export interface TransactionData {
    id?: string;
    description: string;
    amount: number;
    date: string;
    op: string;
}

export interface TransactionsProviderProps {
    children: ReactNode;
}

export interface TransactionsData {
    incomes: number,
    expenses: number,
    total: number,
    formatAmount: (amount: number, op: string) => string,
    refresh: () => void,
    retrieveData: (data: TransactionData[]) => void
    createTransaction: (transaction: TransactionData)=>Promise<void>
    updateTransaction: (id:string,transaction: TransactionData)=>Promise<void>
    deleteTransaction: (id: string) => void
    formatDate: (date:string) => string
    config: RequestConfigs
}

export interface UpdateProductModalContextData {
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

export interface UpdateProductContextProviderProps {
    children : ReactNode
}

export interface AddProductModalContextData {
    submit: (data) => void;
    toggleModal: () => void;
    isModalOpen: boolean;
}

export interface AddProductModalContextProviderProps {
    children: ReactNode;
}

export interface SliderButtonProviderProps {
    children: ReactNode;
}

export interface SliderButtonContextData {
    colors: ColorData;
    toggleTheme: (params)=>void;
}

export interface ColorData {
    "someTexts": string;
    "header": string;
    "body": string;
    "cards": string;
    "cardsTotal": string;
    "addButton": string;
    "table": string;
    "sliderBg": string;
    "thumbPos": string;
}

export interface ThemeData {
    name: string;
}

export interface HomeProps {
    transactions?: TransactionData[]
}

export interface DataTableProps {
    transactions: TransactionData[]
    text: string
}

export interface CardProps {
    bg: string
    cname: string
    dispValue: string
    text: string
}
