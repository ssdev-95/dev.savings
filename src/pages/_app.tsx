import Head from 'next/head';
import { TransactionsProvider } from '../contexts/TransactionsContext'
import { AddProductModalContextProvider } from '../contexts/AddProductModalContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
    <AddProductModalContextProvider>
      <Head>
        <title>Dev.finance$</title>
      </Head>
      <Component {...pageProps} />
    </AddProductModalContextProvider>
    </TransactionsProvider>
  )
}

export default MyApp
