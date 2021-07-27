import { Request, Response } from "express";
import { RetrieveUserService } from '../../services/users/RetrieveUserService'

class RetrieveUserController {
    async handle(req:Request, res:Response) {
        const { authorization:token } = req.headers
        const retrieveUserService = new RetrieveUserService()

        const userName = await retrieveUserService.execute(token)

        if(userName.trim() === '') {
            return res.status(404).json({ msg: 'No such user' })
        }

        return res.status(200).json({ username: userName })
    }
}

export { RetrieveUserController }