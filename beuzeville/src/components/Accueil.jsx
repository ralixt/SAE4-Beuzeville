import accueil from "../assets/accueil.jpg";
import '../CSS/Accueil.css'
import Actualite from "./Actualite.jsx";
import Agenda from "./Agenda.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";
import {Link} from "react-router-dom";


import ccphb from "../assets/LiensUtiles/Communauté_de_communes_du_Pays_de_Honfleur-Beuzeville.png"
import departement from  "../assets/LiensUtiles/departement.png"
import honfleur from "../assets/LiensUtiles/honfleur.png"
import ccieure from  "../assets/LiensUtiles/logo_ccieure.png"
import mediatheque from "../assets/LiensUtiles/mediatheque.png"
import normandieTourisme from "../assets/LiensUtiles/normandieTourisme.png"
import poleEstuaire from "../assets/LiensUtiles/pole-estuaire.png"
import region from "../assets/LiensUtiles/Region_Normandie.png"
import pnr from "../assets/LiensUtiles/pnrNormande.png"

export function Accueil(){
    const [projectss, setProjects] = useState([]);
    const [agenda, setAgenda] = useState([]);
    useEffect(() => {
        const query = ref(database, "Actualite");
        onValue(query, (snapshot) => {
            const data = snapshot.val();


            if (snapshot.exists()) {
                Object.values(data).map((project) => {
                    setProjects((projectss) => [...projectss, project]);
                    //console.log(project.titre)
                });
            }
        });
    }, []);
    useEffect(() => {
        const query2 = ref(database, "Agenda");
        onValue(query2, (snapshot2) => {
            const data2 = snapshot2.val();
            if (snapshot2.exists()) {
                Object.values(data2).map((event1) => {
                    setAgenda((agenda) => [...agenda, event1]);
                    //console.log(project.titre)
                });
            }
        });
    }, []);

    return <>
        <div id="accueil">
            <div className="backgroundDiv">
                <img src={accueil} alt="Fond Démarches avec Mairie de Beuzeville" id="accueilBackground"/>
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


                    <Link to="https://www.tipi.budget.gouv.fr/tpa/accueilportail.web">
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

                <a href="TouteActualite">Voir toutes les actualites</a>

               
            </div>

            <div>
                <div className="actualite">
                    <h2 className='titreActualite'>Agenda</h2>
                    <div className='container'>
                        {agenda.splice(0,4).map(
                            (event1)=>(
                                <Agenda titre={event1.Titre}
                                        category={event1.Category}
                                        horaire={event1.Horaire} 
                                        lieu={event1.Lieu}
                                        date1={event1.DateDebut}
                                        date2={event1.DateFin}>
                                </Agenda>))}
                    </div>
                </div>
                <div id='buttonEvent'>
                    <a href="allAgenda" className='BackgroundBlue'>Voir tous les évènements</a>
                </div>
            </div>


            <div id="divLiensUtiles">
                <h1>Liens utiles</h1>
                <div id="liensUtiles">
                    <Link to="https://www.normandie.fr/">
                        <img src={region} alt="Logo Région Normandie" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://eureennormandie.fr/" >
                        <img src={departement} alt="Logo Département de l'Eure en Normandie" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.normandie-tourisme.fr/">
                        <img src={normandieTourisme} alt="Logo Normandie Tourisme" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.portesdenormandie.cci.fr/">
                        <img src={ccieure} alt="Logo CCI Eure" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.ccphb.fr/">
                        <img src={ccphb} alt="Logo Communauté de communes Honfleur-Beuzeville" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.ot-honfleur.fr/">
                        <img src={honfleur} alt="Logo d'Honfleur" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.estuairedelaseine.fr/">
                        <img src={poleEstuaire} alt="Logo Pôle métropolitaine de l'Estuaire de la Seine" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.mediathequebeuzeville.fr/">
                        <img src={mediatheque} alt="Logo médiathéque de Beuzeville" className="logoLiensUtiles"/>
                    </Link>

                    <Link to="https://www.pnr-seine-normande.com/">
                        <img src={pnr} alt="Logo Parc naturel régional des Boucles de la Seine Normande" className="logoLiensUtiles"/>
                    </Link>
                </div>


            </div>




        </div>
    </>

}