import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const useAddDoc = (coll) => {
  const addData = async (data) => {
    await addDoc(collection(db, coll), data)
  }

  return addData
}

export default useAddDoc