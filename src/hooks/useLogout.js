import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"
import useAuthContext from "./useAuthContext"

const useLogout = () => {
  const { dispatch } = useAuthContext()

  const logout = () => {
    signOut(auth)
    .then(() => dispatch({type: 'LOGOUT', payload: null}))
    .catch((err) => console.log(err.message))
  }
  return logout
}

export default useLogout