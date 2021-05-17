import React, { useContext } from 'react'
import { Transactions } from '@/contexts/TransactionsContext'
import { UpdateProductModalContext } from '@/contexts/UpdateProductModalContext'

import { DataTableProps } from '@/types'

import styles from '@/styles/components/DataTable.module.css'

export const DataTable = ({ transactions, text}: DataTableProps) => {
    const { formatAmount, deleteTransaction, formatDate } = useContext(Transactions)
    const {toggleUpdateModal, get} = useContext(UpdateProductModalContext)

    const chils = transactions.length>0&&(
        transactions.map(transaction=>{
            const {description, amount, date, id, op} = transaction
            const textcolor = op==='expense'? '#ff0000' : '#00ff00'
            return (<tr 
                      key={id} 
                      style={{color: text}}>
                        <td
                          onClick={()=> {
                            toggleUpdateModal(id)
                            get(description, amount, date)
                        }}>{description}</td>
                        <td 
                          style={{color: textcolor}}
                          onClick={()=> {
                            toggleUpdateModal(id)
                            get(description, amount, date)
                        }}>{formatAmount(amount)}</td>
                        <td
                          onClick={()=> {
                            toggleUpdateModal(id)
                            get(description, amount, date)
                        }}>{formatDate(date)}</td>
                        <td onClick={()=>deleteTransaction(id)}>
                            <img src="icons/minus.svg" />
                        </td>
                    </tr>)
        })
    )

    return (
        <div className={styles.dataTableContainer}>
            <table className={styles.dataTable}>
                <thead>
                    <tr style={{color: text}}>
                        <td>Description</td>
                        <td>Amount</td>
                        <td>Date</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    { chils }
                </tbody>
            </table>
        </div>
    )
}
