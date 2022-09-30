import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/home'
import Login from './pages/login'
import Cadastro from './pages/cadastro'
import Produtos from './pages/produtos'


export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/produto' element={<Produtos/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/cadastro' element={<Cadastro/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}