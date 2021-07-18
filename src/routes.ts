import { Router } from 'express'
import { AddTransactionController } from './controllers/AddTransactionController'
import { DeleteTransactionController } from './controllers/DeleteTransactionController'

const addTransactionController = new AddTransactionController()
const deleteTransactionController = new DeleteTransactionController()

const router = Router()

router.get('/users/:id/transactions', (req, res)=>res.json({ msg: `all user(${req.params['id']}) transactions will appear here` }))

router.post('/users/:id/transactions', addTransactionController.handle)

router.post('/users/:id/transactions/:slug', deleteTransactionController.handle)

export  { router }