import React from 'react'
import Home from './Home'
import About from './About'
import  Navbar  from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Users from './Users'
function Pwa() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} /> 
                    <Route path='/users' element={<Users />} />                  
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Pwa