import React from 'react'

import { CardProps } from '@/types'

import styles from '../../styles/components/Cards.module.css'

export const Card = ({ bg, cname, dispValue, text }: CardProps) => {
    return (
        <div className={`${styles.card} ${cname}`} style={{background: bg}}>
            <h3 style={{color: text}}>{cname}</h3>
            <p>{dispValue}</p>
        </div>
    )
}