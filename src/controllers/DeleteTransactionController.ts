import { Request, Response } from 'express'
import { DeleteTransactionService } from '../services/DeleteTransactionService'

class DeleteTransactionController  {
    async handle(req:Request, res:Response) {
        const id = req.params['slug']

        const deleteTransactionService = new DeleteTransactionService()

        const success = await deleteTransactionService.execute(id)

        return res.json({ success: success })
    }
}

export { DeleteTransactionController }