import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Purchases from './components/Purchases'
import Product from './components/Product'
import ProtectedRoutes from './components/ProtectedRoutes'
import Logo from './assets/logo.jpg'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar Logo={Logo}/>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
