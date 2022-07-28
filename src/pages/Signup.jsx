import { useState } from 'react'

import styles from './Signup.module.css'
import useSignup from '../hooks/useSignup'

const Signup = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signup = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(username, email, password)
  }

  return (
    <div className={styles.signup}>
      
      <form className={styles.signupForm} onSubmit={handleSubmit}>
      <h1>Signup</h1>
        <label>
          Username
          <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email
          <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
        </label>
        <input type="submit" name="submit" value="Signup" className={styles.submitButton} />
      </form>
    </div>
  )
}

export default Signup