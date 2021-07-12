import Trash from 'src/icons/trash.svg'
import { Table } from './styles'

function TransactionsTable() {

    return (
        <Table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{'Carwash'}</td>
                    <td>{'- R$ 95,67'}</td>
                    <td>{'15/05/2021'}</td>
                    <td>
                        <button onClick={()=>alert('Deleted')}>
                            <img src={Trash} alt="Delete" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}

export { TransactionsTable }