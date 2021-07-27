import { decode } from 'jsonwebtoken'
import { database } from '../../db/firebase'
import { Transaction, UserToken } from '../../@types'

class AddTransactionService {

    async execute({description, amount, when, category }: Transaction, token:string) {
        const { id } = decode(token) as UserToken

        const transit = {
            description: description,
            amount: amount,
            when: when,
            category: category,
            owner: id
        }

        const result = await database.collection('transactions').add(transit)
        const record =  await result.get()
        
        const newTransaction = {
            id: record.id,
            description: record.data().description,
            amount: record.data().amount,
            category: record.data().category,
            when: record.data().when
        } as Transaction

        return newTransaction
    }
}

export { AddTransactionService }