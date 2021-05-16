import React, { useContext, useEffect } from 'react'

import { Card } from '@/components/Card'
import { DataTable } from '@/components/DataTable'
import { AddProductModal } from '@/components/AddProductModal'

import { Transactions,readTransactions } from '@/contexts/TransactionsContext'
import { AddProductModalContext } from '@/contexts/AddProductModalContext'
import { UpdateProductModalContext } from '@/contexts/UpdateProductModalContext'
import { SliderButtonContext } from '@/contexts/SliderButtonContext'
import { SliderButton } from '@/components/SliderButton'

import { GetStaticProps } from 'next'
import { UpdateProductModal } from '@/components/UpdateProductModal'

import { HomeProps } from '@/types'

import styles from '@/styles/pages/Home.module.css'

export default function Home({ transactions }: HomeProps) {
  const { formatAmount, refresh, retrieveData, incomes, expenses, total } = useContext(Transactions)

  const { colors } = useContext(SliderButtonContext)

  const { isModalOpen, toggleModal } = useContext(AddProductModalContext)
  const { isUpdateModalOpen } = useContext(UpdateProductModalContext)

  const openAddProductModal = event => {
    window.addEventListener('click', ()=>{
      event.preventDefault()
    })
    toggleModal()
  }

  useEffect(()=>{
    refresh()
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
            dispValue={`R$ ${String((total/100).toFixed(2)).replace('.', ',')}`}  />
        <DataTable text={colors.table} transactions={transactions} />
      </main>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const port = process.env.PORT
  const uri = `http://localhost:${port}/api/transactions`

  const transactions = await readTransactions(uri)
  console.log(port)

  return {
    props: {
      transactions
    }, revalidate: 10
  }
}
