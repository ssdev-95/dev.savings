import { Request, Response} from 'express'
import {RetrieveTransactionsService } from '../../services/transactions/RetrieveTransactionsService'

class RetrieveTransactionsController {

    async handle(req:Request, res:Response) {
        const token = req.headers.authorization
        const retrieveTransactionsService = new RetrieveTransactionsService()

        const results = await retrieveTransactionsService.execute(token)

        return res.json({ transactions: results })
    }
}

export { RetrieveTransactionsController }