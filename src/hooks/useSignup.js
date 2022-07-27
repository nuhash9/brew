import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import useAuthContext from './useAuthContext'

const useSignup = () => {
  const { dispatch } = useAuthContext()

  const signup = async (username, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      if (res.user) {
        const user = res.user
        await updateProfile(user, {displayName: username})

        dispatch({
          type: 'LOGIN',
          payload: user
        })
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  return signup
}

export default useSignup