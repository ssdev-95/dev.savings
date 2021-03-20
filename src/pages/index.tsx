import React, { useContext, useState, useEffect } from 'react'
import {Card} from '../components/Card'
import {DataTable} from '../components/DataTable'
import {AddProductModal} from '../components/AddProductModal'

import { Transactions } from '../contexts/TransactionsContext'
import { AddProductModalContext } from '../contexts/AddProductModalContext'
import { SliderButtonContext } from '../contexts/SliderButtonContext'
import { SliderButton } from '../components/SliderButton'

import Themes from '../styles/themes.json'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  const { formatAmount, incomes, expenses, total } = useContext(Transactions)

  const {theme} = useContext(SliderButtonContext)

  const [colors, setColors]= useState(Themes[0].colors)

  const { isModalOpen, toggleModal } = useContext(AddProductModalContext)

  const openAddProductModal = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
    toggleModal()
  }

  useEffect(()=>{
    switch(theme.name) {
      case 'light':
        setColors(Themes[0].colors)
        break
      case 'dark':
        setColors(Themes[1].colors)
        break
      case 'rocket':
        setColors(Themes[2].colors)
        break
      default:
        alert('404 - No such theme')
        break
    }
  }, [theme])

  return (
    <div className={styles.container}>
      <SliderButton />
      {isModalOpen&&(<AddProductModal />)}
      <a className={styles.addButton} onClick={openAddProductModal} href="#">+</a>
      <nav className={styles.navBar} style={{background: colors.header}}>
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
