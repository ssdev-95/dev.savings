import { decode } from "jsonwebtoken";
import { UserToken } from "../../@types";
import { database } from "../../db/firebase"

class DeleteUserService {
    async execute(token:string) {
        const user = decode(token) as UserToken

        if(!user) {
            throw new Error('Invalid token')
        }

        try {
            await database.collection('users').doc(user.id).delete()
            
            return true
        } catch(err) {
            return false
        }
    }
}

export { DeleteUserService }