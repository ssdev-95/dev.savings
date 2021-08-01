import { createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

import { firebase, auth } from '../services/firebase.config'

import { IAuthContextData, IProviderProps } from 'src/@types'

const AuthContext = createContext({} as IAuthContextData)

const URI = process.env.REACT_APP_API_URI
// const URI ='http://localhost:9000'

const customHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Accept": "application/json",
    "Content-Type": "application/json"
}

function AuthProvider({children}: IProviderProps) {
    const [cookie, setCookie] = useCookies(['token'])
    const [token, setToken] = useState<string>('')

    async function loginWithGoogle() {
        const authProvider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(authProvider)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Google Account');
            }

            const { data } = await axios.post(`${URI}/users`, {
                id: uid,
                name: displayName
            }, {
                headers: customHeaders
            })

            const userToken = data.token as string

            setCookie('token', userToken, { path: '/', maxAge: (24*60*60) })
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

            const { data } = await axios.post(`${URI}/users`, {
                id: uid,
                name: displayName
            }, {
                headers: customHeaders
            })

            const userToken = data.token as string

            setCookie('token', userToken, { path: '/', maxAge: (24*60*60) })
        }
    }
    
    async function loginWithEmailAndPassword(email: string, passphrase: string) {
        const result = await auth.signInWithEmailAndPassword(email, passphrase)

        if(result.user) {
            const { displayName, uid } = result.user

            const { data } = await axios.post(`${URI}/users`, {
                id: uid,
                name: displayName || email
            }, {
                headers: customHeaders
            })

            const userToken = data.token as string

            setCookie('token', userToken, { path: '/', maxAge: (24*60*60) })
        }
    }

    async function signUpWithEmailAndPassword(email: string, passphrase: string) {
        const { user } = await auth.createUserWithEmailAndPassword(email, passphrase)

        if(user) {
            const { displayName, uid } = user

            const { data } = await axios.post(`${URI}/users`, {
                id: uid,
                name: displayName || email
            }, {
                headers: customHeaders
            })

            const userToken = data.token as string

            setCookie('token', userToken, { path: '/', maxAge: (24*60*60) })
        }
    }

    useEffect(()=>{
        if(cookie) {
            setToken(cookie['token'])
        }
    }, [cookie])

    return (
        <AuthContext.Provider value={{
            token,

            loginWithGoogle,
            loginWithGithub,
            loginWithEmailAndPassword,
            signUpWithEmailAndPassword
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }