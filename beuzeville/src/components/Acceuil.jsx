import acceuil from "../assets/acceuil.jpg";
import '../CSS/Acceuil.css'
import Actualite from "./Actualite.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";
import {Link} from "react-router-dom";

export function Acceuil(){
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
        <div id="acceuil">
            <div className="backgroundDiv">
                <img src={acceuil} alt="Fond Démarches avec Mairie de Beuzeville" id="acceuilBackground"/>
            </div>

            <div id="enUnClic">
                <h1 id="titreEnUnClic">- En un clic -</h1>
                <div id="iconsDiv">
                    <Link to="/demarches">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">devices</span>
                            <p>Mes</p>
                            <p>démarches</p>
                        </div>
                    </Link>

                    <Link to="/actualites">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">newspaper</span>
                            <p>Actualités</p>
                        </div>
                    </Link>

                    <Link to="/agenda">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">calendar_month</span>
                            <p>Agenda</p>
                        </div>
                    </Link>

                    <Link to="/explorer">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">travel_explore</span>
                            <p>Explorer</p>
                            <p>Beuzeville</p>
                        </div>
                    </Link>


                    <Link to="/travaux">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">construction</span>
                            <p>Travaux</p>
                            <p>en cours</p>
                        </div>
                    </Link>


                    <Link to="">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">credit_card</span>
                            <p>Paiement</p>
                            <p>en ligne</p>
                        </div>
                    </Link>

                    <Link to="/contact">
                        <div className="icon-text">
                            <span className="material-symbols-outlined icon">mail</span>
                            <p>Contact</p>
                        </div>
                    </Link>


                </div>


            </div>

            <div className="actualite">
                <h2 className='titreActualite'>Actualités</h2>
                <div className='container'>
                    {projectss.splice(0,4).map(
                        (projet)=>(
                            <Actualite titres={projet.titre}
                                       descriptions={projet.description}
                                       images={projet.image} 
                                       date={projet.date}>
                            </Actualite>))}
                            
                </div>

                <a href="ToutActualite">Voir tout les actualites</a>

               
            </div>



            <h1>Liens utiles</h1>

        </div>
    </>

}