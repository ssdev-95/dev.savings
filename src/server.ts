import 'reflect-metadata'
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors'
import { router } from './routes'

require('dotenv').config()

const port = Number(process.env.NODE_APP_PORT) 

const app = express()

app.use(express.json())
app.use(router)
app.use((err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err instanceof Error) {
        return res.status(400).json({ err: err.message })
    }

    return res.status(500).json({ err: 'Internal server error!' })
})

app.listen(port, ()=>console.log(`Running at PORT: ${port}`))

export default app