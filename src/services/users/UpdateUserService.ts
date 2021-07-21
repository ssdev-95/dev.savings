import { decode } from 'jsonwebtoken'
// import { database } from "../../db/firebase"

class UpdateUserService {

    async execute(token:string, name: string) {
        const user = decode(token)

        // await database.collection('users').doc(id).set({
        //     name: name
        // })

        if(!user) {
            throw new Error('Invalid token')
        }

        return user
    }
}

export { UpdateUserService }