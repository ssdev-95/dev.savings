import Head from 'next/head';
import { TransactionsProvider } from '../contexts/TransactionsContext'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <TransactionsProvider>
      <Head>
        <title>Dev.finance$</title>
      </Head>
      <Component {...pageProps} />
    </TransactionsProvider>
  )
}

export default MyApp
