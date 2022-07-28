import { db } from '../firebase/config'
import { getDocs, collection, query, where, onSnapshot, orderBy } from 'firebase/firestore'
import { useEffect, useState, useRef } from 'react'

const useCollection = (coll, qArr) => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  const queryArr = useRef(qArr)

  useEffect(() => {
    const getData = () => {
      setData([])

      const collRef = collection(db, coll)

      let q = query(collRef, orderBy('created', 'desc'))
      if (queryArr) {
        q = query(collRef, where(...queryArr.current), orderBy('created', 'desc'))
      }
      try {
        const unsub = onSnapshot(q, (snapshot) => {
          let results = []
          snapshot.forEach((doc) => {
            results.push({id: doc.id, ...doc.data()})
          })
          setData(results)
          setIsLoading(false)
        })
        return unsub
      }
      catch (err) {
        console.log(err.message)
      }
    }

    return getData()
  }, [coll, queryArr])

  return { data, isLoading, error }
}

export default useCollection