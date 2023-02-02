import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import ProductList from './components/ProductList'
import Home from './components/Home'
import Purchases from './components/Purchases'
import Product from './components/Product'
import Login from './components/Login'
import ProtectedRoutes from './components/ProtectedRoutes'
import Logo from './assets/logo.jpg'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <NavBar Logo ={Logo}/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/navbar' element={<NavBar/>} />
          <Route path='/product/' element={<Product/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/login' element= { <Login/> }/>
          <Route element={<ProtectedRoutes />}>
            <Route path='/purchases' element={<Purchases/>} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
