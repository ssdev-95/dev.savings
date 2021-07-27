import { decode } from 'jsonwebtoken'
import { User, UserToken } from '../../@types'
import { database } from "../../db/firebase"

class UpdateUserService {

    async execute(token:string, name: string) {
        const { id } = decode(token) as UserToken

        if(id.trim()==='') {
            throw new Error('Invalid token')
        }

        await database.collection('users').doc(id).set({
            name: name
        })

        const user = {
            id: id,
            name: name
        } as User

        return user
    }
}

export { UpdateUserService }