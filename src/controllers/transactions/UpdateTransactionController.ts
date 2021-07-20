import { Request, Response} from 'express'
import { Transaction } from '../../@types'
import {UpdateTransactionService } from '../../services/transactions/UpdateTransactionService'

class UpdateTransactionController {

    async handle(req:Request, res:Response) {
        const {
            description,
            amount,
            when,
            category,
            owner
        } = req.body as Transaction

        const id = req.params['slug']

        const updateTransactionService = new UpdateTransactionService()
        
        const hasUpdated = await updateTransactionService.execute({
            id: id,
            description: description,
            amount: amount,
            category: category,
            when: when,
            owner: owner
        })

        return res.json({ hasUpdated: hasUpdated })
    }
}

export { UpdateTransactionController }