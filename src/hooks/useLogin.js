import { auth } from "../firebase/config"
import { signInWithEmailAndPassword } from "firebase/auth"

import { useState, useEffect } from 'react'
import useAuthContext from "./useAuthContext"

const useLogin = () => {
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {
    setError(null)

    try {
      const cred = await signInWithEmailAndPassword(auth, email, password)

      if (cred) {
        dispatch({
          type: 'LOGIN',
          payload: cred.user
        })
      }
    }
    catch (err) {
      setError(err)
    }
  }

  return { error, login }
}

export default useLogin