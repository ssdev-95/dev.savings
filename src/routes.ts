import { Request, Response, Router } from 'express'

const router = Router()

import { AddTransactionController } from './controllers/transactions/AddTransactionController'
import { DeleteTransactionController } from './controllers/transactions/DeleteTransactionController'
import { UpdateTransactionController } from './controllers/transactions/UpdateTransactionController'
import { RetrieveTransactionsController } from './controllers/transactions/RetrieveTransactionsController'

import { CreateUserController } from './controllers/users/CreateUserController'

const addTransactionController = new AddTransactionController()
const deleteTransactionController = new DeleteTransactionController()
const updateTransactionController = new UpdateTransactionController()
const retrieveTransactionsController = new RetrieveTransactionsController()

const createUserController = new CreateUserController()

async function handle404Redirect(req:Request, res:Response) {
    return res.status(404).json({ status: 404, msg: 'Feature not found' })
}

// ############ Transaction Routes ############
router.get('/users/:id/transactions', retrieveTransactionsController.handle)
router.post('/users/:id/transactions', addTransactionController.handle)
router.get('/users/:id/transactions/:slug', handle404Redirect)
router.post('/users/:id/transactions/:slug', updateTransactionController.handle)
router.delete('/users/:id/transactions/:slug', deleteTransactionController.handle)
// router.get('/users/:id/transactions/:slug/update', handle404Redirect)

// ############ User Routes ############
router.get('/users', handle404Redirect)
router.post('/users', createUserController.handle)
router.delete('/users', handle404Redirect)
router.patch('/users', handle404Redirect)

export { router }