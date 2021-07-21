import { decode } from "jsonwebtoken";
// import { database } from "../../db/firebase"

class DeleteUserService {
    async execute(token:string) {
        const user = decode(token)

        if(!user) {
            throw new Error('Invalid token')
        }

        // await database.collection('users').doc(user['id']).delete()
        
        return user
    }
}

export { DeleteUserService }