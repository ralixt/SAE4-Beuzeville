import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'

function App() {
  

  return <>
    
    <body>
      <header>
       <Header></Header>
      </header>
      <main>

      </main>

      <footer>
        <BrowserRouter>
          <Link to="./Contact.jsx">Contact</Link>
        </BrowserRouter>
      </footer>
    </body>
   
   
    </>
  
}

export default App
