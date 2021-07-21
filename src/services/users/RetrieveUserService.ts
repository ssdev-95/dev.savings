import { decode } from "jsonwebtoken";
// import { database } from '../../db/firebase'

class RetrieveUserService {
    async execute(token:string) {
        const user  = decode(token)
        
        if(!user) {
            throw new Error('Invalid token')
        }

        // const userRecord = await database.collection('users').doc(user['id']).get()

        // const userName = userRecord.data().name

        return user
    }
}

export { RetrieveUserService }