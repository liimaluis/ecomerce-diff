import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Produto from './pages/produtos'
import Login from './pages/login'


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/produto' element={<Produto/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}