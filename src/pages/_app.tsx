import Head from 'next/head';
import { TransactionsProvider } from '../contexts/TransactionsContext'
import { AddProductModalContextProvider } from '../contexts/AddProductModalContext'
import { SliderButtonContextProvider } from '../contexts/SliderButtonContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <SliderButtonContextProvider>
    <TransactionsProvider>
    <AddProductModalContextProvider>
      <Head>
        <title>Dev.finance$</title>
      </Head>
      <Component {...pageProps} />
    </AddProductModalContextProvider>
    </TransactionsProvider>
    </SliderButtonContextProvider>
  )
}

export default MyApp
