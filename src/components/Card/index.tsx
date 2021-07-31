import { useState } from 'react'
import { ICardProps } from 'src/@types'
import styles from './styles.module.scss'

function Card({dataset, labels}: ICardProps) {
    const [current, setCurrent] =useState(0)

    function increaseCurrent() {
        if(current===2) {
            return setCurrent(0)
        }

        return setCurrent(prev=>prev+1)
    }

    function decreaseCurrent() {
        if(current===0) {
            return setCurrent(2)
        }

        return setCurrent(prev=>prev-1)
    }

    return (
        <div className={styles.card}>
            <button
              className={styles.button}
              onClick={decreaseCurrent}
            >&lt;&lt;</button>
            <div>
                <p>{labels[current]}</p>
                <h2>{dataset[current]}</h2>
            </div>
            <button
              className={styles.button}
              onClick={increaseCurrent}
            >&gt;&gt;</button>
        </div>
    )
}

export { Card }