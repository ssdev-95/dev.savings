import { createContext, useState } from 'react'

import { firebase, auth } from '../services/firebase.config'

import { IAuthContextData, IAuthProviderProps } from 'src/@types/auth'

const AuthContext = createContext({} as IAuthContextData)

function AuthProvider({children}: IAuthProviderProps) {
    const [token, setToken] = useState<string>('')
    const [username, setUsername] = useState<string>('')

    async function loginWithGoogle() {
        const authProvider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(authProvider)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Google Account');
            }

            const userToken = ''

            setToken(userToken)
            setUsername(displayName)
        }
    }

    async function loginWithGithub() {
        const authProvider = new firebase.auth.GithubAuthProvider()
        const result = await auth.signInWithPopup(authProvider)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Github Account');
            }

            const userToken = ''

            setToken(userToken)
            setUsername(displayName)
        }
    }
    
    async function loginWithEmailAndPassword(email: string, passphrase: string) {
        // const authProvider = new firebase.auth.GithubAuthProvider()
        const result = await auth.signInWithEmailAndPassword(email, passphrase)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Github Account');
            }

            const userToken = ''

            setToken(userToken)
            setUsername(displayName)
        }
    }

    async function signUpWithEmailAndPassword(email: string, passphrase: string) {
        // const authProvider = new firebase.auth.GithubAuthProvider()
        const result = await auth.createUserWithEmailAndPassword(email, passphrase)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Github Account');
            }

            const userToken = ''

            setToken(userToken)
            setUsername(displayName)
        }
    }

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
            username, 
            setUsername
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }