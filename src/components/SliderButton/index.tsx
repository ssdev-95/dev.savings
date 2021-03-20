import React, { useContext } from 'react'

import {SliderButtonContext} from '../../contexts/SliderButtonContext'

import styles from '../../styles/components/SliderButton.module.css'

export const SliderButton = () => {
    const {theme, toggleTheme} = useContext(SliderButtonContext)

    return (
        <div style={{backgroundColor: theme.bg}}  className={styles.sliderContainer}>
            <div className={styles.slide}>
                <div id='default' className={styles.box} onClick={toggleTheme}></div>
                <div id='dark' className={styles.box} onClick={toggleTheme}></div>
                <div id='rocket' className={styles.box} onClick={toggleTheme}></div>
                <div style={{left: theme.position}} className={styles.thumb}></div>
            </div>
        </div>
    )
}