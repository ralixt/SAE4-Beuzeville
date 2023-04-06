import acceuil from "../assets/acceuil.jpg";
import '../CSS/Accueil.css'
import Actualite from "./Actualite.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";
import {Link} from "react-router-dom";


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
    
    <h2 className='titreActualite'>Actualités</h2>
                <div className='container'>
                    {projectss.map(
                        (projet)=>(
                            <Actualite titres={projet.titre}
                                       descriptions={projet.description}
                                       images={projet.image} 
                                       date={projet.date}>
                            </Actualite>))}
                            
                </div>
    
    </>
}