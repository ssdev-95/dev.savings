import React, { useContext } from 'react'
import { Transactions } from '../../contexts/TransactionsContext'

import styles from '../../styles/components/DataTable.module.css'

export const DataTable = () => {
    const {transactions, removeTransaction, formatAmount} = useContext(Transactions)

    return (
        <div className={styles.dataTableContainer}>
            <table className={styles.dataTable}>
                <thead>
                    <tr>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction=>{
                        const {description, amount, date, id} = transaction
                        return (<tr key={id}>
                            <td>{description}</td>
                            <td>{formatAmount(amount)}</td>
                            <td>{date}</td>
                            <td onClick={()=>{removeTransaction(id)}}>
                                <img src="icons/minus.svg" />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}