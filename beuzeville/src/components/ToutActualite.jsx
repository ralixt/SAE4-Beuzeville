import acceuil from "../assets/acceuil.jpg";

import '../CSS/Accueil.css'
import '../CSS/ToutActualite.css'
import Actualite from "./Actualite.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";
import {Link} from "react-router-dom";
import Actaliteimg from "./../assets/pageActu.png"


export function ToutActualite(){
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

    return<>
    <div id='Actualite'>
    <div className="imageAcualite">
        <img src={Actaliteimg} alt="l'image de la page actualite" />
    </div>
    
    <h2 className='titreActualites'>Actualités</h2>
                <div className='container'>
                    {projectss.map(
                        (projet)=>(
                            <Actualite titres={projet.titre}
                                       descriptions={projet.description}
                                       images={projet.image} 
                                       date={projet.date}>
                            </Actualite>))}
                            
                </div>
    </div>
    </>
    
}