/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState, useEffect } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'

import { firebase, auth } from '../services/firebase.config'

import { IAuthContextData, IProviderProps } from 'src/@types'

const AuthContext = createContext({} as IAuthContextData)

// const ApiURI = process.env.REACT_APP_API_URI
const ApiURI ='http://localhost:9000'

function AuthProvider({children}: IProviderProps) {
    const [cookie, setCookie] = useCookies(['token'])
    const [token, setToken] = useState<string>(cookie['token'] || '')

    async function loginWithGoogle() {
        const authProvider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(authProvider)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Google Account');
            }

            const { data } = await axios.post(`${ApiURI}/users`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    id: uid,
                    name: displayName
                }
            })

            console.log(data)

            // const userToken = data.token as string

            // setToken(userToken)
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

            const { data } = await axios.post(`${ApiURI}/users`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    id: uid,
                    name: displayName
                }
            })
            console.log(data)

            // const userToken = data.token as string

            // setToken(userToken)
        }
    }
    
    async function loginWithEmailAndPassword(email: string, passphrase: string) {
        const result = await auth.signInWithEmailAndPassword(email, passphrase)

        if(result.user) {
            const { displayName, uid } = result.user

            if(!displayName) {
                throw new Error('Missing info from Github Account');
            }

            const { data } = await axios.post(`${ApiURI}/users`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    id: uid,
                    name: displayName
                }
            })
            console.log(data)

            // const userToken = data.token as string

            // setToken(userToken)
        }
    }

    async function signUpWithEmailAndPassword(email: string, passphrase: string) {
        const { user } = await auth.createUserWithEmailAndPassword(email, passphrase)

        if(user) {
            const { displayName, uid } = user

            const { data } = await axios.post(`${ApiURI}/users`, {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: {
                    id: uid,
                    name: displayName || `User${Date.now()}`
                }
            })
            console.log(data)

            // const userToken = data.token as string

            // setToken(userToken)
        }
    }

    useEffect(()=>{
        if(token.trim()!=='') {
            setCookie('token',token, { path: '/', maxAge: (24*60*60) })
        }
    }, [token, setCookie])

    return (
        <AuthContext.Provider value={{
            token,
            setToken,

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