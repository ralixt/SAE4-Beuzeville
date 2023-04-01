import acceuil from "../assets/acceuil.jpg";
import '../CSS/Acceuil.css'
import Actualite from "./Actualite.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";

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
                    <div className="icon-text">
                        <span className="material-symbols-outlined">devices</span>
                        <p>Mes démarches</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">newspaper</span>
                        <p>Actualités</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">calendar_month</span>
                        <p>Agenda</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">travel_explore</span>
                        <p>Explorer Beuzeville</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">construction</span>
                        <p>Travaux en cours</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">credit_card</span>
                        <p>Paiement en ligne</p>
                    </div>

                    <div className="icon-text">
                        <span className="material-symbols-outlined">mail</span>
                        <p>Contact</p>
                    </div>

                </div>


            </div>

            <div>
                <h2 className='titreActualite'>Actualités</h2>
                <div className='container'>
                    {projectss.map(
                        (projet)=>(
                            <Actualite titres={projet.titre}
                                       descriptions={projet.description}
                                       images={projet.image} >
                            </Actualite>))}
                </div>
            </div>

        </div>
    </>

}