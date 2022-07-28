import styles from './Home.module.css'

import { useState, useEffect } from 'react'
import useAddDoc from '../hooks/useAddDoc'
import useAuthContext from '../hooks/useAuthContext'

const Home = () => {
  const [amountCoffee, setAmountCoffee] = useState('')
  const [amountBrew, setAmountBrew] = useState('')
  const [strength, setStrength] = useState('')
  const [concentration, setConcentration] = useState('')
  const [notes, setNotes] = useState('')

  const {user} = useAuthContext()

  const addData = useAddDoc('brews')

  const saveBrew = () => {
    let brew = {
        amountCoffee,
        amountBrew,
        notes,
        userId: user.uid
    }

    console.log(brew)
    addData(brew)
  }

  const handleConc = (e) => {
    const newConc = e.target.value
    setConcentration(newConc)
    setAmountCoffee(newConc * amountBrew / 100)
  }

  useEffect(() => {
    amountBrew && (setConcentration(amountCoffee/amountBrew * 100))

    if (concentration >= 9) {
      setStrength('very strong')
    }
    else if (concentration >= 6) {
        setStrength('strong')
    }
    else if (concentration >= 3) {
        setStrength('medium')
    }
    else if (concentration > 0) {
        setStrength('light')
    }
    else {
        setStrength('')
    }
  }, [concentration, amountCoffee, amountBrew])

  return (
    <div className={styles.calc}>
      <h1>BREW A CUP</h1>
      <label htmlFor="brew">Size of Brew (ml) <br/></label>
      <input id="brew" type="number" placeholder="Max volume of cup" onChange={(e) => setAmountBrew(e.target.value)} value={amountBrew} />

      <label htmlFor="coffee">Amount of Coffee (g)</label>
      <input id="coffee" type="number" placeholder="Enter amount of coffee" onChange={(e) => setAmountCoffee(e.target.value)} value={amountCoffee} />

      <p>Concentration</p>
      <div className={styles['concentration-bar']} 
      style={{width: `${concentration * 10}%`}}
      >{Math.floor(concentration)} g/ml</div>
      <input type="range" min="0" max="10" name="conc" id="conc" value={concentration} onChange={handleConc} />
      
      {strength && <p>Strength: {strength}</p>}

      <textarea rows="5" cols="40" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)} ></textarea>

      <button className={styles.saveButton} onClick={saveBrew}>Save</button>
    </div>
  )
}

export default Home