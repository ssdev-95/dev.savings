import { Request, Response } from 'express'
import { AddTransactionService } from '../services/AddTransactionService'

class AddTransactionController  {
    async handle(req:Request, res:Response) {
        const { description, amount, when } = req.body
        const id = req.params['id']

        const addTransactionService = new AddTransactionService()

        const record = addTransactionService.execute({
            description: description,
            amount: amount,
            when: when,
            owner: id
        })

        return res.json({ transaction: record })
    }
}

export { AddTransactionController }