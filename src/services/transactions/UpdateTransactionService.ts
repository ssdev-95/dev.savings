import { database } from '../../db/firebase'
import { Transaction } from '../../@types'

class UpdateTransactionService {

    async execute(transaction: Transaction) {
        try {
            await database.collection('transactions').doc(transaction.id).set({
                description: transaction.description,
                amount: transaction.amount,
                when: transaction.when,
                category: transaction.category,
                owner: transaction.owner
            })

            return true
        } catch(err) {
            console.error(err)
            return false
        }
    }
}

export { UpdateTransactionService }