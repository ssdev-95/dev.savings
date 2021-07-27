import { database } from '../../db/firebase'
import { Transaction, UserToken } from '../../@types'
import { decode } from 'jsonwebtoken'

class UpdateTransactionService {

    async execute(transaction: Transaction, token:string) {
        try {
            const { id } = decode(token) as UserToken

            if(id!==transaction.owner) {
                throw new Error('Unauthorized')
            }

            await database.collection('transactions').doc(transaction.id).set({
                description: transaction.description,
                amount: transaction.amount,
                when: transaction.when,
                category: transaction.category,
                owner: id
            })

            return true
        } catch(err) {
            return false
        }
    }
}

export { UpdateTransactionService }