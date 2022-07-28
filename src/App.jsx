import styles from './App.module.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Brews from './pages/Brews'
import Signup from './pages/Signup'
import useAuthContext from './hooks/useAuthContext'

function App() {
  const { user } = useAuthContext()

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/brews' element={
            <>
            {user ? <Brews /> : <Navigate to='/login'/>}
            </>
          }/>
          <Route path='/login' element={
            <>
            {user ? <Navigate to='/brews' /> : <Login />}
            </>
          } />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App