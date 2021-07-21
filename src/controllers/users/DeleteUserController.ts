import { Request, Response } from "express";
import { DeleteUserService } from '../../services/users/DeleteUserService'

class DeleteUserController {
    async handle(req:Request, res:Response) {
        const { authorization:token } = req.headers
        const deleteUserService = new DeleteUserService()

        try {
            const user = await deleteUserService.execute(token)
            
            console.log(user)

            return res.json({ user: 'succeeded' })
        } catch(err) {
            return res.status(500).json({ status: 'Unauthorized' })
        }
    }
}

export { DeleteUserController }