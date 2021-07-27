import { decode } from 'jsonwebtoken'
import { database } from '../../db/firebase'
import { Transaction, UserToken } from '../../@types'

class RetrieveTransactionsService {
    async execute(token: string) {
        const { id } = decode(token) as UserToken
        const results = await database.collection('transactions').where('owner', '==', id).get()

        const transactions = results.docs.map(doc=>({
            id: doc.id,
            description: doc.data().description,
            amount: (Number(doc.data().amount)>=0)?Number(doc.data().amount):(Number(doc.data().amount)*(-1)),
            when: doc.data().when,
            category: doc.data().category
        })) as Transaction[]

        return transactions
    }
}

export { RetrieveTransactionsService }