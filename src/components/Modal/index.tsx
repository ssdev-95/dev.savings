import { ChangeEvent, FormEvent, useState } from 'react'
import { useTransactions } from 'src/hooks/useTransactions'
import { IModalProps } from 'src/@types'
import styles from './styles.module.scss'

function Modal({transaction=null}: IModalProps) {
    const [newTransaction, setNewTransaction] = useState(transaction||{})
    const { toggleModal } = useTransactions()

    function handleSubmit(e: FormEvent) {
        e.preventDefault()

        if(newTransaction) console.log(JSON.stringify(newTransaction))

        toggleModal(null)
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault()
        const { value, name } = e.currentTarget

        setNewTransaction({
            ...newTransaction,
            id: transaction?.id??'',
            [name]: value
        })
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button></button>
                <form name="transaction" id="transaction" onSubmit={handleSubmit}>
                    <input
                       name="description"
                       required
                       type="text"
                       onChange={handleChange}
                       placeholder="Description"
                       defaultValue={transaction?.description || ''}
                    />
                    <input
                       name="amount"
                       required
                       type="number"
                       onChange={handleChange}
                       placeholder="Amount, use minus (-) for negative numbers"
                       defaultValue={transaction?.amount || ''}
                    />
                    <input
                       name="date"
                       required
                       type="date"
                       onChange={handleChange}
                       defaultValue={transaction?.date || ''}
                    />
                </form>
                <button type="submit" form="transaction"></button>
            </div>
        </div>
    )
}

export { Modal }