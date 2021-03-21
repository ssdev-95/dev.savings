import React from 'react'

import styles from '../../styles/components/Cards.module.css'

export const Card = (props) => {
    return (
        <div className={`${styles.card} ${props.cname}`} style={{background: props.bg}}>
            <h3 style={{color: props.text}}>{props.cname}</h3>
            <p>{props.dispValue}</p>
        </div>
    )
}