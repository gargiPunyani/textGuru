import React from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Components/About'
import Blogs from './Components/Blogs'
import Pricing from './Components/Pricing'
import Products from './Components/Products'
import Contact from './Components/Contact'
import Login from './Components/Login'
import { Signup } from './Components/Signup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App