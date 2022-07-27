import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("Context does not apply here.")
  }

  return context
}

export default useAuthContext