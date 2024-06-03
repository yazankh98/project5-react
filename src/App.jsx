
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Packages from './Pages/Packages'

function App() {

  return (
    <>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/packages' element={<Packages/>} />
        
      </Routes>
    </>
  )
}

export default App
