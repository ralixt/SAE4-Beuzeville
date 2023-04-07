import '../CSS/Demarches.css'
import mairieBeuzeville from '../assets/Beuzeville-place-de-la-mairie.jpg'
import {Link} from "react-router-dom";

import carteIdentite from'../assets/Demarches/carte-d-identite.png'
import enfants from '../assets/Demarches/enfants.png'
import urbanisme from '../assets/Demarches/planification-environnementale.png'
import etatCivil from '../assets/Demarches/correct.png'
import election from '../assets/Demarches/vote-yes.png'
import signature from '../assets/Demarches/documents.png'
import attestation from '../assets/Demarches/attestation.png'
import ast from '../assets/Demarches/document-de-signe.png'
import guichet from '../assets/Demarches/moniteur.png'


export function Demarches(){



    function clickEtatCivil() {
        const faqs = document.querySelectorAll(".contentBox");

        faqs.forEach((faq) => {
            faq.addEventListener("click",() => {
                console.log("oui")
                faq.classList.toggle("active");
            })
        })

    }

    console.log("ok")

    return <>

        <div id="demarches">
            <div className="divBackground">
                <img src={mairieBeuzeville} alt="Fond Démarches avec Mairie de Beuzeville" id="mairieBeuzeville"/>
            </div>

            <div id="mesDemarches">
                <h1>Mes démarches</h1>

                <div id="demarchesBoxes">
                    <div className="demarcheBox">
                        <img src={carteIdentite} alt="Logo Carte Nationale d’identité (CNI) et Passeport" className="demarcheIcon"/>
                        <h3>Carte Nationale d’identité (CNI) et Passeport</h3>
                    </div>

                    <div className="demarcheBox">
                        <img src={enfants} alt="Logo Inscriptions scolaires 2022-2023" className="demarcheIcon"/>
                        <h3>Inscriptions scolaires 2022-2023</h3>
                    </div>

                    <div className="demarcheBox">
                        <img src={urbanisme} alt="Logo Urbanisme" className="demarcheIcon"/>
                        <h3>Urbanisme</h3>
                    </div>





                    <div className="contentBox" onClick={clickEtatCivil}>
                        <div className="label">
                            <img src={etatCivil} alt="Logo Etat Civil" className="demarcheIcon"/>
                            <h3>Etat Civil</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>

                        <div className="contenu">
                            <ul>
                                <li>Demande d’acte d’état civil</li>
                                <li>Fiches d’état civil</li>
                                <li>Mariage civil</li>
                                <li>Certificat de vie maritale (ou concubinage)</li>
                                <li>Pacte Civil de Solidarité (PACS)</li>
                                <li>Livret de famille</li>
                                <li>Déclaration de naissance</li>
                                <li>Reconnaissance d’un enfant</li>
                            </ul>
                        </div>
                    </div>


                    <div className="contentBox" onClick={clickEtatCivil}>
                        <div className="label">
                            <img src={election} alt="Logo Élection - Recensement citoyen" className="demarcheIcon"/>
                            <h3>Élection - Recensement citoyen</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>

                        <div className="contenu">
                            <ul>
                                <li>Inscription sur la liste électorale</li>
                                <li>Recensement citoyen obligatoire</li>
                                <li>Vote par procuration</li>
                                <li>Commission de contrôle des listes électorales</li>
                            </ul>
                        </div>
                    </div>


                    <div className="contentBox" onClick={clickEtatCivil}>
                        <div className="label">
                            <img src={signature} alt="Logo Signature, baptême civil, héritage et certification de documents" className="demarcheIcon"/>
                            <h3>Signature, baptême civil, héritage et certification de documents</h3>
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>

                        <div className="contenu">
                            <ul>
                                <li>Législation de signature</li>
                                <li>Baptême civil ou parrainage</li>
                                <li>Certificat d’hérédité</li>
                                <li>Copies conformes</li>
                            </ul>
                        </div>
                    </div>



                    <div className="demarcheBox">
                        <img src={attestation} alt="Logo Attestation d’acceuil" className="demarcheIcon"/>
                        <h3>Attestation d’acceuil</h3>
                    </div>

                    <div className="demarcheBox">
                        <img src={ast} alt="Logo Autorisation de sortie de territoire (AST)" className="demarcheIcon"/>
                        <h3>Autorisation de sortie de territoire (AST)</h3>
                    </div>

                    <div className="demarcheBox">
                        <img src={guichet} alt="Logo Espace France Services : Un guichet Unique" className="demarcheIcon"/>
                        <h3>Espace France Services : Un guichet Unique</h3>
                    </div>


                </div>



            </div>

        </div>

    </>

}