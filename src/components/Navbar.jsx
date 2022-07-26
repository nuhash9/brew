import styles from './Navbar.module.css'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h2>
        <Link to='/'>Brew</Link>
      </h2>
      
      <ul className={styles.links}>
        <li><Link to='/'>+add a brew</Link></li>
        <li><Link to='/brews'>Brews</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/signup'>Signup</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar