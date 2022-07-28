import { db } from "../firebase/config"
import { collection, addDoc } from "firebase/firestore"

const useAddDoc = (coll) => {
  const addData = async (data) => {
    const docRef = await addDoc(collection(db, coll), data)
    console.log(docRef)
  }

  return addData
}

export default useAddDoc