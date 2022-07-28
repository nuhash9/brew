import { db } from '../firebase/config'
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const useCollection = (coll) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      setData([])
      const snapshot = await getDocs(collection(db, coll))
    
      let results = []
      snapshot.forEach((doc) => {
        results.push({id: doc.id, ...doc.data()})
      })
      
      setData(results)
      setIsLoading(false)
      console.log(data)
    }
    getData()
  }, [coll])

  return { data, isLoading, error }
}

export default useCollection