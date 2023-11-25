import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Header from './ComponentsForPages/Header'
import Footer from './ComponentsForPages/Footer'
import Shopping from './Pages/Shopping'
import Cart from './Pages/Cart'



function App() {

  return (
    <>
     <Router> 
      <Header/>
        <Routes>   
        
          <Route path='/' element={<Home/>}/>
          <Route path='/Shopping' element={<Shopping/>}/>
          <Route path='/cart' element={<Cart/>}/>
         
         
         

         
        </Routes>
     

        <Footer/>
      </Router>
    </>
  )
}

export default App
