import { database } from '../../db/firebase'
class DeleteTransactionService {
    async execute(transaction_id: string) {
        try {
            await database.collection('transactions').doc(transaction_id).delete()
            return true
        } catch (err) {
            return false
        }
    }
}

export { DeleteTransactionService }