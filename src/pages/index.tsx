import React from 'react'
import {Card} from '../components/Card'
import {DataTable} from '../components/DataTable'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav className={styles.navBar}>
        <img src="icons/logo.svg" alt=""/>
      </nav>
      <main className={styles.content}>
        <Card cname='incomes' />
        <Card cname='expenses' />
        <Card cname='totals' />
        <DataTable />
      </main>
    </div>
  )
}
