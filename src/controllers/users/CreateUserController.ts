import { Request, Response } from "express"
import { CreateUserService } from "../../services/users/CreateUserService"

class CreateUserController {
    async handle(req:Request, res:Response) {
        const createUserService = new CreateUserService()

        const { name, id } = req.body

        const token = await createUserService.execute(name, id)

        return res.json({ token: token })
    }
}

export { CreateUserController }