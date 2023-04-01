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

function App() {
  const [projectss, setProjects] = useState([]);
  useEffect(() => {
    const query = ref(database, "Actualite");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      
      
      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setProjects((projectss) => [...projectss, project]);
          //console.log(project.titre)
        });
      
    
      }
    });
  }, []);


  return <>
 



       <Header />



    


        { <BrowserRouter>

          <Routes>
              <Route path="*" element={<NotFound />} />
              <Route index element={<div> <h2 className='titreActualite'>Actualités</h2> <div className='container'> {projectss.map((projet)=>(<Actualite titres={projet.titre} descriptions={projet.description} images={projet.image} > </Actualite>))} </div> </div>} />
              <Route path="maths" element={<p>J'aime les maths</p>} />
              <Route path="contact" element={<Contact />} />
              <Route path="alertessms" element={<AlertesSMS/>}></Route>
              <Route path="newsletter" element={<Newsletter/>}></Route>
            <Route path="confirmationAlertesSMS" element={<ConfirmationAlertesSMS/>}></Route>

          </Routes>
          </BrowserRouter>
        }

        <Footer/>       
   
   
    </>
  
}

export default App
