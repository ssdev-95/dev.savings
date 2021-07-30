import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { router } from './routes'

require('dotenv').config()

const origins = [
    'http://localhost:3000',
    'https://devsavings-alpha.firebaseapp.com/',
    'https://dev-savings-xsallus.vercel.app',
    'https://dev-savings-git-master-xsallus.vercel.app/'
]
const port = process.env.PORT || process.env.NODE_APP_PORT 

const server = express()

server.use(cors({ origin: origins }))
server.use(express.json())
server.use(router)
server.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error) {
        return res.status(400).json({ err: err.message })
    }

    return res.status(500).json({ err: 'Internal server error!' })
})

server.listen(port, ()=>console.log(`Running at PORT: ${port}`))

export default server
