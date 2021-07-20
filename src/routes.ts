import { Request, Response, Router } from 'express'

import { AddTransactionController } from './controllers/AddTransactionController'
import { DeleteTransactionController } from './controllers/DeleteTransactionController'
import { UpdateTransactionController } from './controllers/UpdateTransactionController'
import { RetrieveTransactionsController } from './controllers/RetrieveTransactionsController'

const addTransactionController = new AddTransactionController()
const deleteTransactionController = new DeleteTransactionController()
const updateTransactionController = new UpdateTransactionController()
const retrieveTransactionsController = new RetrieveTransactionsController()

async function handle404Redirect(req:Request, res:Response) {
    return res.json({ msg: 'Feature not found' })
}

const router = Router()

router.get('/users/:id/transactions/:slug', handle404Redirect)

router.get('/users/:id/transactions/:slug/update', handle404Redirect)

router.post('/users/:id/transactions', addTransactionController.handle)

router.get('/users/:id/transactions', retrieveTransactionsController.handle)

router.delete('/users/:id/transactions/:slug', deleteTransactionController.handle)

router.post('/users/:id/transactions/:slug', updateTransactionController.handle)

export { router }