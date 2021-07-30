/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pie } from 'react-chartjs-2'
import { useTransactions } from 'src/hooks/useTransactions'

import { Table } from 'src/components/Table'
import ILogo from 'src/icons/logo.svg'
import ICoin from 'src/icons/coin.png'

import styles from './styles.module.scss'

function Dash() {
    const { transactions, incomes, expenses } = useTransactions()

    return (
        <main className={styles.dash}>
            <section>
                <div>
                    <img src={ILogo} alt="dev.$avings" />
                    <span>value</span>
                    <button>add</button>
                </div>
                {/* <img className={styles.chart} src={ICoin} alt="Dogecoin"/> */}
                {/* Finalize tomorrow :D */}
                <Pie
                  redraw
                  data={[ ['incomes', incomes], ['expenses', expenses] ]}
                />
            </section>
            <section>
                <Table transactions={transactions} />
            </section>
        </main>
    )
}

export default Dash