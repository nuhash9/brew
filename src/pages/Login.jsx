import styles from './Login.module.css'

import { useState, useEffect } from 'react'

// Returns firebase user object. Expects email and password.
import useLogin from '../hooks/useLogin'
import { auth } from '../firebase/config'
import useAuthContext from '../hooks/useAuthContext'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { user: currUser } = useAuthContext()
  const { user, error, login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()

    login(email, password)
  }

  return (
    <div className={styles['login']}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label>
          Email
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <input type="submit" name="submit" value="Login" className={styles.submitButton} />
      </form>
      {user && <p>{user.displayName}</p>}
      {error && <p>{error.message}</p>}
      <p>{currUser && currUser.email}</p>
    </div>
  )
}

export default Login