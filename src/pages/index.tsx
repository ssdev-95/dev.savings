import React, { useContext, useState, useEffect } from 'react'
import { Card } from '../components/Card'
import { DataTable } from '../components/DataTable'
import { AddProductModal } from '../components/AddProductModal'

import { Transactions } from '../contexts/TransactionsContext'
import { AddProductModalContext } from '../contexts/AddProductModalContext'
import { UpdateProductModalContext } from '../contexts/UpdateProductModalContext'
import { SliderButtonContext } from '../contexts/SliderButtonContext'
import { SliderButton } from '../components/SliderButton'

import styles from '../styles/pages/Home.module.css'
import { GetStaticProps } from 'next'
import { UpdateProductModal } from '../components/UpdateProductModal'

import axios from 'axios'

export default function Home({ transactions }) {
  const { formatAmount, retrieveData, incomes, expenses, total } = useContext(Transactions)

  const { colors } = useContext(SliderButtonContext)

  const { isModalOpen, toggleModal } = useContext(AddProductModalContext)
  const { isUpdateModalOpen, toggleUpdateModal } = useContext(UpdateProductModalContext)

  const openAddProductModal = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
    toggleModal()
  }

  useEffect(()=>{
    retrieveData(transactions)
  }, [])

  return (
    <div className={styles.container} style={{background: colors.body}}>
      <SliderButton />
      {isModalOpen&&(<AddProductModal />)}
      {isUpdateModalOpen&&(<UpdateProductModal />)}
      <a 
        className={styles.addButton} 
        onClick={openAddProductModal}
        href="#" 
        style={{color: colors.addButton, borderColor: colors.addButton}}>+</a>
      <nav className={styles.navBar} style={{background: colors.header}}>
        <img src="icons/logo.svg" alt=""/>
      </nav>
      <main className={styles.content}>
        <Card 
            bg={colors.cards} 
            text={colors.someTexts} 
            cname='incomes' 
            dispValue={formatAmount(incomes, 'incomes')} />
        <Card 
            bg={colors.cards} 
            text={colors.someTexts} 
            cname='expenses' 
            dispValue={formatAmount(expenses, 'expenses')}  />
        <Card 
            bg={colors.cardsTotal} 
            text={'#fff'} 
            cname='totals' 
            dispValue={`R$ ${String(total/100).replace('.', ',')}`}  />
        <DataTable text={colors.table} transactions={transactions} />
      </main>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const result = await axios.get('http://localhost:3000/api/transactions')
  const list = await result.data
  const transactions = list.body.map(doc=>{
    return {
      id: doc._id,
      description: doc.description,
      op: doc.op,
      amount: doc.amount,
      date: doc.date
    }
  })

  return {
    props: {
      transactions
    }, revalidate: 10
  }
}
