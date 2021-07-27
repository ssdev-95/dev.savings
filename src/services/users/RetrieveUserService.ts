import { decode } from "jsonwebtoken";
import { UserToken } from "../../@types";
import { database } from '../../db/firebase'

class RetrieveUserService {
    async execute(token:string) {
        const user  = decode(token) as UserToken
        
        if(!user) {
            throw new Error('Invalid token')
        }

        const userRecord = await database.collection('users').doc(user['id']).get()

        const userName = userRecord.data().name as String;

        return userName
    }
}

export { RetrieveUserService }