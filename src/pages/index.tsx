import React, { useContext } from 'react'
import {Card} from '../components/Card'
import {DataTable} from '../components/DataTable'
import {AddProductModal} from '../components/AddProductModal'

import { Transactions } from '../contexts/TransactionsContext'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const { formatAmount, incomes, expenses, total } = useContext(Transactions)
  const openAddProductModal = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
  }
  return (
    <div className={styles.container}>
      <AddProductModal />
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
