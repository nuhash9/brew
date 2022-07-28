import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"
import { createContext, useEffect, useReducer } from "react"

export const AuthContext = createContext()

const authReducer = (state, {type, payload}) => {
  // console.log(type, payload)

  switch(type) {
    case 'LOGIN':
      return {...state, user: payload, authIsReady: true}
    case 'LOGOUT':
      return {...state, user: payload}
    default:
      return state
  }
}

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false
  })

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: 'LOGIN',
          payload: user
        })
      }
      return unsub()
    })
    
  }, [])


  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      {children}
    </AuthContext.Provider>
  )
}