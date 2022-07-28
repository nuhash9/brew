import styles from './Brew.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faMound, faNoteSticky, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useDeleteDoc from '../hooks/useDeleteDoc'

const Brew = ({brew}) => {
  const [notesIsOpen, setNotesIsOpen] = useState(false)
  const deleteData = useDeleteDoc('brews')

  const toggleNotes = (e) => {
    notesIsOpen ? setNotesIsOpen(false) : setNotesIsOpen(true)
  }

  const handleDelete = (docId) => {
    deleteData(docId)
  }

  return (
    <div
      className={styles['brew']}
      onClick={(e) =>
        notesIsOpen && toggleNotes()
    }>
      <div>
        <FontAwesomeIcon className={styles['fa']} icon={faMugHot} />
        {brew.amountBrew}ml
      </div>
      <div>
        <FontAwesomeIcon className={styles['fa']} icon={faMound} />
        {brew.amountCoffee}g
      </div>
      <div className={styles['notes-toggle']} id='notes-toggle' onClick={toggleNotes} >
        {brew.notes && <FontAwesomeIcon icon={faNoteSticky} />}
      </div>

      <div>
        {brew.created && <span>{brew.created.toDate().toLocaleString()}</span>}
      </div>

      <div className={styles['delete-button']} onClick={() => handleDelete(brew.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </div>

      {notesIsOpen &&
      <div className={styles['notes']} >
        {brew.notes && <span><strong>You said</strong><br/><br/>{brew.notes}</span>}
      </div>}
    </div>
  )
}

export default Brew