import { Request, Response } from "express"
import { UpdateUserService } from "../../services/users/UpdateUserService"

class UpdateUserController {
    async handle(req:Request, res:Response) {
        try {
            const updateUserService = new UpdateUserService()

            const { name } = req.body
            const { authorization:token } = req.headers
    
            const user = await updateUserService.execute(token, name)
    
            return res.status(200).json({ updatedUser: user })
        } catch(err) {
            return res.status(500).json({ status: 'Unauthorized' })
        }
    }
}

export { UpdateUserController }