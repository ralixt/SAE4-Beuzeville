import '../CSS/Demarches.css'
import mairieBeuzeville from '../assets/Beuzeville-place-de-la-mairie.jpg'
import {Link} from "react-router-dom";

import carteIdentite from'../assets/Demarches/carte-d-identite.png'
import enfants from '../assets/Demarches/enfants.png'
import urbanisme from '../assets/Demarches/planification-environnementale.png'
import etatCivil from '../assets/Demarches/planification-environnementale.png'
import election from '../assets/Demarches/vote-yes.png'
import signature from '../assets/Demarches/documents.png'
import attestation from '../assets/Demarches/attestation.png'
import ast from '../assets/Demarches/document-de-signe.png'
import guichet from '../assets/Demarches/moniteur.png'


export function Demarches(){

    return <>

        <div id="demarches">
            <div className="divBackground">
                <img src={mairieBeuzeville} alt="Fond Démarches avec Mairie de Beuzeville" id="mairieBeuzeville"/>
            </div>

            <div id="mesDemarches">
                <h1>Mes démarches</h1>

                <div id="demarchesBoxes">
                    <div className="demarcheBox">
                        <img src={carteIdentite} alt="Logo Carte Nationale d’identité (CNI) et Passeport"/>
                        <p>Carte Nationale d’identité (CNI) et Passeport</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={enfants} alt="Logo Inscriptions scolaires 2022-2023"/>
                        <p>Inscriptions scolaires 2022-2023</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={urbanisme} alt="Logo Urbanisme"/>
                        <p>Urbanisme</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={etatCivil} alt="Logo Etat Civil"/>
                        <p>Etat Civil</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={election} alt="Logo Élection - Recensement citoyen"/>
                        <p>Élection - Recensement citoyen</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={signature} alt="Logo Signature, baptême civil, héritage et certification de documents"/>
                        <p>Signature, baptême civil, héritage et certification de documents</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={attestation} alt="Logo Attestation d’acceuil"/>
                        <p>Attestation d’acceuil</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={ast} alt="Logo Autorisation de sortie de territoire (AST)"/>
                        <p>Autorisation de sortie de territoire (AST)</p>
                    </div>

                    <div className="demarcheBox">
                        <img src={guichet} alt="Logo Espace France Services : Un guichet Unique"/>
                        <p>Espace France Services : Un guichet Unique</p>
                    </div>


                </div>



            </div>

        </div>

    </>

}