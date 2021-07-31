import { useTransactions } from 'src/hooks/useTransactions'
import { formatCurrency, formatDate } from 'src/services/utils/format'
import { ITableProps } from 'src/@types'

function Table({ transactions }: ITableProps) {
    const { toggleModal } = useTransactions()

    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    transactions.map(({ id, amount, description, category, date }) => (
                        <tr
                          key={id}
                          onClick={()=>toggleModal({ id, amount, description, category, date })}
                        >
                            <td>{description}</td>
                            <td>{formatCurrency(amount, category)}</td>
                            <td>{formatDate(date)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export { Table }