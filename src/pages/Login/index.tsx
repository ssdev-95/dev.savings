/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from 'src/hooks/useAuth'
import ILogo from 'src/icons/logo.svg'
import styles from './styles.module.scss'

function LoginPage() {
    const history = useHistory()
    const {
        signUpWithEmailAndPassword,
        loginWithEmailAndPassword ,
        loginWithGoogle,
        loginWithGithub,
        token
    } = useAuth()

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()

        const value = event.currentTarget.value
        const ref = event.currentTarget.name

        setCredentials({
            ...credentials,
            [ref]: value
        })
    }

    async function handleSubmitLogin(event: FormEvent) {
        event.preventDefault()

        const { email, password } = credentials

        await loginWithEmailAndPassword(email, password)
    }

    async function handleSubmitSignUp() {
        const { email, password } = credentials

        await signUpWithEmailAndPassword(email, password)
    }

    useEffect(()=>{
        if(token.trim()==='') {
            history.push('/home')
        }
    }, [token])

    return (
        <main className={styles.container}>
            <header className={styles.navbar}>
                <img
                  src={ILogo}
                  alt="Dev.$avings"
                  onClick={()=>history.push('/')}
                />
            </header>
            <section className={styles['login-left']}>
                <form
                  name="credentials"
                  id="credentials"
                  onSubmit={handleSubmitLogin}
                >
                    <input
                      name="email"
                      type="email"
                      required
                      onChange={handleChange}
                    />
                    <input
                      name="password"
                      type="password"
                      required
                      onChange={handleChange}
                    />
                </form>
                <button type="submit" form="credentials">Sign In</button>
            </section>
            <aside className={styles['login-right']}>
                <button onClick={handleSubmitSignUp}>Sign Up</button>
                <button onClick={loginWithGoogle}>Save with Google</button>
                <button onClick={loginWithGithub}>Save with Github</button>
            </aside>
        </main>
    )
}

export default LoginPage