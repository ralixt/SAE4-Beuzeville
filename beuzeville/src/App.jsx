import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Agenda from './components/Agenda.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'
import Contact from './components/Contact.jsx';
import { AlerteSMS } from './components/AlerteSMS.jsx';

function App() {
  

  return <>
  
    
    
       <Header />
 
      <Agenda />
      
        { <BrowserRouter>

          <Routes>
            <Route index element={<p><Link to="/contact">Contact</Link> La Maison</p>} />
            <Route path="maths" element={<p>J'aime les
            maths</p>} />
            <Route path="contact" element={<Contact />} />
            <Route path="alertessms" element={<AlerteSMS/>}></Route>
          </Routes>
          </BrowserRouter>
        }

        <Footer/>       
   
   
    </>
  
}

export default App
