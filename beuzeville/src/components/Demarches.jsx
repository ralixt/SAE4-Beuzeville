import '../CSS/Demarches.css'
import mairieBeuzeville from '../assets/Beuzeville-place-de-la-mairie.jpg'
import {Link} from "react-router-dom";
import alertesSMSBackground from "../assets/alertesSMS.jpg";


export function Demarches(){

    return <>

        <div id="demarches">
            <div className="divBackground">
                <img src={mairieBeuzeville} alt="Fond Démarches avec Mairie de Beuzeville" id="mairieBeuzeville"/>
            </div>

        </div>

    </>

}