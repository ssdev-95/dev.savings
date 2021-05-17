import React, { useContext } from 'react'

import { CardProps } from '@/types'

import { Transactions } from '@/contexts/TransactionsContext'

import styles from '@/styles/components/Cards.module.css'

export const Card = ({ bg, cname, dispValue, text, op }: CardProps) => {
    const { formatAmount } = useContext(Transactions)

    return (
        <div className={`${styles.card} ${cname}`} style={{background: bg}}>
            <h3 style={{color: text}}>{cname}</h3>
            <p>{formatAmount(dispValue)}</p>
        </div>
    )
}