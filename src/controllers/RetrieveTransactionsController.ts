import { Request, Response} from 'express'
import {RetrieveTransactionsService } from '../services/RetrieveTransactionsService'

class RetrieveTransactionsController {

    async handle(req:Request, res:Response) {
        const retrieveTransactionsService = new RetrieveTransactionsService()

        const results = await retrieveTransactionsService.execute()

        return res.json({ transactions: results })
    }
}

export { RetrieveTransactionsController }