import { db } from '../firebase/config'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { useEffect, useState, useRef } from 'react'

const useCollection = (coll, qArr) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const queryArr = useRef(qArr)

  useEffect(() => {
    const getData = async () => {
      setData([])

      const collRef = collection(db, coll)

      let q = query(collRef)
      if (queryArr) {
        q = query(collRef, where(...queryArr.current))
      }
      try {
        const snapshot = await getDocs(q)
        let results = []
        snapshot.forEach((doc) => {
          results.push({id: doc.id, ...doc.data()})
        })
        setData(results)
        setIsLoading(false)
      }
      catch (err) {
        console.log(err.message)
      }
      
    }
    getData()
  }, [coll, queryArr])

  return { data, isLoading, error }
}

export default useCollection