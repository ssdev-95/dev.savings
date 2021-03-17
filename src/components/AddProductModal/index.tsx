import React from 'react'

import styles from '../../styles/components/AddProductModal.module.css'

export const AddProductModal = () => {
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <input className={styles.description} type="text" name="description" id="description"/>
                <input className={styles.amount} type="number" name="amount" id="amount"/>
                <input className={styles.date} type="date" name="date" id="date"/>
                <div className={styles.actions}>
                    <a className={styles.cancelButton} href="#">cancel</a>
                    <a className={styles.submitButton} href="#">submit</a>
                </div>
            </div>
        </div>
    )
}