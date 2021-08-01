/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'

import { useTransactions } from 'src/hooks/useTransactions'
import { useAuth } from 'src/hooks/useAuth'
import { formatCurrency } from 'src/services/utils/format'

import { Table } from 'src/components/Table'
import { Spinner } from 'src/components/Spinner'
import { Card } from 'src/components/Card'
import { Modal } from 'src/components/Modal'

import ILogo from 'src/icons/logo.svg'
import { FaPlus } from 'react-icons/fa'

import styles from './styles.module.scss'

function Dash() {
    const {
        transactions,
        incomes,
        expenses,
        total,
        isModalOpen,
        toggleModal,
        toUpdate
    } = useTransactions()
    const { token } = useAuth()
    const [isLoading, setIsLoading] = useState(true)

    const [data, setData] = useState({
        labels: ['incomes', 'expenses'],
        datasets: [{
            backgroundColor: ['#4444f7ad', '#ff0000ac'],
            borderColor: ['#4444f7ad', '#ff0000ac'],
            data: [1000, 25000]
        }]
    })

    useEffect(()=>{
        setData({
            ...data,
            datasets: [{
                backgroundColor: ['#4444f7ad', '#ff0000ac'],
                borderColor: ['#4444f7ad', '#ff0000ac'],
                data: [parseFloat((incomes/100).toFixed(2)), parseFloat((expenses/100).toFixed(2))]
            }]
        })

        setTimeout(()=>setIsLoading(false), 3500)
    }, [incomes, expenses])

    return (
        <>
            {
                (!token||token.trim()==='') ? (<Redirect to="/auth0" />) :
                (<main className={styles.dash}>
                    {isModalOpen && <Modal transaction={toUpdate} />}
                    <section>
                        <div>
                            <img src={ILogo} alt="dev.$avings" />
                            <Card
                            dataset={[
                                formatCurrency(incomes, 'income'),
                                formatCurrency(expenses, 'expenses'),
                                formatCurrency(total, `${total>=0?'income':'expense'}`)]}
                            labels={['Incomes', 'Expenses', 'Liquid']}
                            />
                            <button onClick={()=>toggleModal(null)}>
                                <FaPlus />
                            </button>
                        </div>
                        {
                            isLoading ?
                            (<Spinner />) :
                            (<div>
                                <Pie
                                data={data}
                                width={200}
                                height={200}
                                options={{ maintainAspectRatio: false }}
                                />
                            </div>)
                        }
                    </section>
                    <section>
                        <Table transactions={transactions} />
                    </section>
                </main>)
            }
        </>
    )
}

export default Dash