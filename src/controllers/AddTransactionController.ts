import { Request, Response } from 'express'
import { Transaction } from '../@types'
import { AddTransactionService } from '../services/AddTransactionService'

class AddTransactionController  {
    async handle(req:Request, res:Response) {
        const { description, amount, when, category } = req.body as Transaction
        const id = req.params['id']

        const addTransactionService = new AddTransactionService()

        const record = await addTransactionService.execute({
            description: description,
            amount: amount,
            category: category,
            when: when,
            owner: id
        })

        return res.json({ transaction: record })
    }
}

export { AddTransactionController }