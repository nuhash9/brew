import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

import useLogout from '../hooks/useLogout'
import useAuthContext from '../hooks/useAuthContext'

const Navbar = () => {
  const { user } = useAuthContext()

  const logout = useLogout()

  return (
    <nav className={styles.nav}>
      <h2>
        <Link to='/'>Brew</Link>
      </h2>
      
      <ul className={styles.links}>
        <li><Link to='/'>+add a brew</Link></li>
        {user && <li><Link to='/brews'>Brews</Link></li>}
        {!user && <li><Link to='/login'>Login</Link></li>}
        {!user && <li><Link to='/signup'>Signup</Link></li>}
        {user && <li><button onClick={logout}>Logout</button></li>}
      </ul>
    </nav>
  )
}

export default Navbar