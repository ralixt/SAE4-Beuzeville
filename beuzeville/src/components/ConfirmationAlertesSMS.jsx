import './../App.css'
import '../CSS/Confirmation.css'
import {Link} from "react-router-dom";




export function ConfirmationAlertesSMS(){
    return <>
        <div id="Confirmation">
            <h1>Inscription aux alertes SMS confirmé !</h1>
            <p>Merci de vous être inscrit(e) à nos alertes SMS !</p>
            <div id="message">
                <p>Vous recevrez maintenant en temps réel des informations sur les risques d'inondation,</p>
                <p>les coupures d'électricité, les travaux, les réunions publiques et les grands événements sur la commune.</p>
            </div>

            <Link to="/" className="button">Retourner sur la page d’acceuil</Link>
        </div>

    </>
}