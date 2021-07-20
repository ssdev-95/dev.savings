import { User } from "../../@types"
import { database } from "../../db/firebase"

import { sign } from 'jsonwebtoken'

class CreateUserService {

    async execute(name:string, id:string) {

        await database.collection('users').doc(id).set({
            name: name
        })

        const user = {
            id: id,
            name: name
        } as User

        const token = sign(user, process.env.NODE_APP_SECRET_KEY, { expiresIn: '7d' })

        return token
    }
}

export { CreateUserService }