import { Transaction } from '../@types'
import { database } from '../db/firebase'

class RetrieveTransactionsService {
    async execute() {
        const results = await database.collection('transactions').get()
        const transactions = results.docs.map(doc=>({
            id: doc.id,
            description: doc.data().description,
            amount: (Number(doc.data().amount)>=0)?Number(doc.data().amount):(Number(doc.data().amount)*(-1)),
            when: doc.data().when,
            owner: doc.data().owner,
            category: doc.data().category
        })) as Transaction[]

        return transactions
    }
}

export { RetrieveTransactionsService }