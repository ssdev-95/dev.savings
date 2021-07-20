import { database } from '../../db/firebase'
import { Transaction } from '../../@types'

class AddTransactionService {

    async execute({description, amount, when, owner, category }: Transaction) {
        const transit = {
            description: description,
            amount: amount,
            when: when,
            owner: owner,
            category: category
        }

        const result = await database.collection('transactions').add(transit)
        const record =  await result.get()
        
        const newTransaction = {
            id: record.id,
            description: record.data().description,
            amount: record.data().amount,
            category: record.data().category,
            when: record.data().when,
            owner: record.data().owner
        } as Transaction

        return newTransaction
    }
}

export { AddTransactionService }