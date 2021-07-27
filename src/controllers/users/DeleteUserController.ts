import { Request, Response } from "express";
import { DeleteUserService } from '../../services/users/DeleteUserService'

class DeleteUserController {
    async handle(req:Request, res:Response) {
        const { authorization:token } = req.headers
        const deleteUserService = new DeleteUserService()

        try {
            const hasDeleted = await deleteUserService.execute(token)

            return res.json({ hasDeleted: hasDeleted })
        } catch(err) {
            return res.status(500).json({ status: 'Unauthorized' })
        }
    }
}

export { DeleteUserController }