import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Actualite from './components/Actualite.jsx'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


import './App.css'
import Contact from './components/Contact.jsx';
import { AlertesSMS } from './components/AlertesSMS.jsx';
import {NotFound} from "./components/NotFound.jsx";
import { Newsletter } from './components/Newsletter.jsx';
import {database} from './components/Database'
import {ref, set, push, onValue} from "firebase/database";
import {ConfirmationAlertesSMS} from "./components/ConfirmationAlertesSMS.jsx";
import {Demarches} from "./components/Demarches.jsx";
import {Accueil} from "./components/Accueil.jsx";
import {ToutAgenda} from './components/ToutAgenda.jsx';
import { ToutActualite } from './components/ToutActualite.jsx';
import { ConfirmationNewsletter } from './components/ConfirmationNewsletter.jsx';

function App() {


  return <>
 
       <Header />


        { <BrowserRouter>

          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Accueil></Accueil>}></Route>
            <Route path="contact" element={<Contact />} />
            <Route path="allAgenda" element={<ToutAgenda/>}/>
            <Route path="alertessms" element={<AlertesSMS/>}></Route>
            <Route path="newsletter" element={<Newsletter/>}></Route>
            <Route path="touteActualite" element={<ToutActualite/>}></Route>
            <Route path="confirmationAlertesSMS" element={<ConfirmationAlertesSMS/>}></Route>
            <Route path="demarches" element={<Demarches/>}></Route>
            <Route path="confirmationNewsletter" element={<ConfirmationNewsletter/>}></Route>

          </Routes>
          </BrowserRouter>
        }

        <Footer/>       
   
   
    </>
  
}

export default App
