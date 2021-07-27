import { Request, Response } from 'express'
import { Transaction } from '../../@types'
import { AddTransactionService } from '../../services/transactions/AddTransactionService'

class AddTransactionController  {
    async handle(req:Request, res:Response) {
        const { description, amount, when, category } = req.body as Transaction
        const token = req.headers.authorization

        const addTransactionService = new AddTransactionService()

        const record = await addTransactionService.execute({
            description: description,
            amount: amount,
            category: category,
            when: when
        }, token)

        return res.json({ transaction: record })
    }
}

export { AddTransactionController }