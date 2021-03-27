import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { UpdateProductModalContext } from '../../contexts/UpdateProductModalContext'

import styles from '../../styles/components/AddProductModal.module.css'

export const UpdateProductModal = () => {
    const {register, handleSubmit} = useForm()
    const {toggleUpdateModal, update, mem} = useContext(UpdateProductModalContext)

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <input ref={register}
                 className={styles.description} 
                 type="text" name="description" 
                 id="description"
                 defaultValue={mem.name}/>
                <input 
                 ref={register} 
                 className={styles.amount} 
                 type="number" 
                 name="amount" 
                 id="amount"
                 defaultValue={mem.value}/>
                <input 
                 ref={register} 
                 className={styles.date} 
                 type="date" 
                 name="date" 
                 id="date"
                 defaultValue={mem.when}/>
                <div className={styles.actions}>
                    <a className={styles.cancelButton} onClick={()=>{
                                window.addEventListener('click', event=>{
                                    event.preventDefault()
                                })
                                toggleUpdateModal('')
                    }} href="#">cancel</a>
                    <a className={styles.submitButton} onClick={handleSubmit(update)} href="#">submit</a>
                </div>
            </div>
        </div>
    )
}