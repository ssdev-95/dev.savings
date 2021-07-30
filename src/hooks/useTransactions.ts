import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

function useTransactions() {
    return useContext(TransactionsContext)
}

export { useTransactions }