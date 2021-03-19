import React, { useContext, useState } from 'react'
import {Card} from '../components/Card'
import {DataTable} from '../components/DataTable'
import {AddProductModal} from '../components/AddProductModal'

import { Transactions } from '../contexts/TransactionsContext'
import { AddProductModalContext } from '../contexts/AddProductModalContext'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const { formatAmount, incomes, expenses, total } = useContext(Transactions)

  const [totalColor, setTotalColor] = useState({text: '', bg: ''})

  const { isModalOpen, toggleModal } = useContext(AddProductModalContext)

  const openAddProductModal = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
    toggleModal()
  }
  return (
    <div className={styles.container}>
      {isModalOpen&&(<AddProductModal />)}
      <a className={styles.addButton} onClick={openAddProductModal} href="#">+</a>
      <nav className={styles.navBar}>
        <img src="icons/logo.svg" alt=""/>
      </nav>
      <main className={styles.content}>
        <Card cname='incomes' dispValue={formatAmount(incomes)} />
        <Card cname='expenses' dispValue={formatAmount(expenses)}  />
        <Card cname='totals' dispValue={formatAmount(total)}  />
        <DataTable />
      </main>
    </div>
  )
}
