import { db } from "../firebase/config"
import { doc, deleteDoc } from "firebase/firestore"

const useDeleteDoc = (coll) => {
  const deleteData = async (docId) => {
    await deleteDoc(doc(db, coll, docId))
  }

  return deleteData
}

export default useDeleteDoc