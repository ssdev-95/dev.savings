import React from 'react'

import styles from '../../styles/components/DataTable.module.css'

export const DataTable = () => {
    const transactions = [
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        },
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        },
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        },
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        },
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        },
        {
            description: 'Luz',
            amount: '-R$ 200,00',
            date: '25/01/2021'
        },
        {
            description: 'Gas',
            amount: '-R$ 90,00',
            date: '25/01/2021'
        },
        {
            description: 'Landing page',
            amount: 'R$ 9000,00',
            date: '25/01/2021'
        },
        {
            description: 'Telefone',
            amount: '-R$ 50,00',
            date: '25/01/2021'
        }
    ]

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
                        const {description, amount, date} = transaction
                        return (<tr>
                            <td>{description}</td>
                            <td>{amount}</td>
                            <td>{date}</td>
                            <td>
                                <img src="icons/minus.svg" />
                            </td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}