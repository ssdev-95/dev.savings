import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { AddProductModalContext } from '../../contexts/AddProductModalContext'

import styles from '../../styles/components/AddProductModal.module.css'

export const AddProductModal = () => {
    const {register, handleSubmit} = useForm()
    const {submit, toggleModal} = useContext(AddProductModalContext)

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <input ref={register} className={styles.description} type="text" name="description" id="description"/>
                <input ref={register} className={styles.amount} type="number" name="amount" id="amount"/>
                <input ref={register} className={styles.date} type="date" name="date" id="date"/>
                <div className={styles.actions}>
                    <a className={styles.cancelButton} onClick={()=>{
                                window.addEventListener('click', event=>{
                                    event.preventDefault()
                                })
                                toggleModal()
                    }} href="#">cancel</a>
                    <a className={styles.submitButton} onClick={handleSubmit(submit)} href="#">submit</a>
                </div>
            </div>
        </div>
    )
}