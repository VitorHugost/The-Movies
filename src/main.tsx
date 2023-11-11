import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import {Detail} from './pages/Detail/index.tsx'
import './styles/global.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>

   <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/detail/:id' element={<Detail/>} />
  </Routes> 
  </BrowserRouter>,
)
