import { useState } from 'react'
import Header from './components/Header.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'
import Contact from './components/Contact.jsx';

function App() {
  

  return <>
    
    
    
       <Header />
 
      
      
        { <BrowserRouter>
          

          <Routes>

            <Route index element={<p><Link to="/contact">Contact</Link> La Maison</p>} />
            <Route path="maths" element={<p>J'aime les
            maths</p>} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          </BrowserRouter>
        }
   
   
   
    </>
  
}

export default App
