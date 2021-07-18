import { database } from '../db/firebase'
import { Transaction } from '../@types'

class AddTransactionService {

    async execute({description, amount, when, owner }: Transaction) {
        const transity = {
            description: description,
            amount: amount,
            when: when,
            owner: owner
        }

        const result = await database.collection('transactions').add(transity)
        return result
    }
}

export { AddTransactionService }