import React, { useContext } from 'react'
import { Transactions } from '../../contexts/TransactionsContext'
import { UpdateProductModalContext } from '../../contexts/UpdateProductModalContext'

import styles from '../../styles/components/DataTable.module.css'

export const DataTable = (props) => {
    const {transactions, removeTransaction, formatAmount} = useContext(Transactions)
    const {toggleUpdateModal, get} = useContext(UpdateProductModalContext)

    return (
        <div className={styles.dataTableContainer}>
            <table className={styles.dataTable}>
                <thead>
                    <tr style={{color: props.text}}>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {
                    transactions.map(transaction=>{
                        const {description, amount, date, id} = transaction
                        const textcolor = amount < 0 ? '#ff0000' : '#00ff00'
                        return (<tr 
                                  key={id} 
                                  style={{color: props.text}}
                                  onClick={()=> {
                                    toggleUpdateModal(id)
                                    get(description, amount, date)
                                  }}>
                                    <td>{description}</td>
                                    <td style={{color: textcolor}}>{formatAmount(amount)}</td>
                                    <td>{date}</td>
                                    <td onClick={()=>{removeTransaction(id)}}>
                                        <img src="icons/minus.svg" />
                                    </td>
                                </tr>)
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}