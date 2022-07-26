import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Brews from './pages/Brews'
import Signup from './pages/Signup'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/brews' element={<Brews />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App