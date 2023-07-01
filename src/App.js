import React from 'react'
import {  Route, Routes, BrowserRouter } from 'react-router-dom'

import PersonalCard from './components/PersonalCard'
import Nav from './components/Nav/Nav'

import Contact from './pages/Contact'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Stacks from './pages/Stacks'
import Home from './pages/Home'
// import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>

  <div className='layout'>
    
    <PersonalCard/>
    

      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/portfolio' element = {<Portfolio/>}/>
        <Route path='/stacks' element = {<Stacks/>}/>


      
      </Routes>

      <Nav/>
      
  </div>
  </BrowserRouter>

    
    
  )
}

export default App