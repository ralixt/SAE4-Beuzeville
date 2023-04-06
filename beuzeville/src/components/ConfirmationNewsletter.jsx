import './../App.css'
import '../CSS/Confirmation.css'
import {Link} from "react-router-dom";




export function ConfirmationNewsletter(){
    return <>
        <div id="Confirmation">
            <h1>Inscription à la newsletter confirmé !</h1>
            <p>Merci de vous être inscrit(e) à notre newsletter !</p>
            <div id="message">
               
                <p>  Nous avons bien enregistré votre inscription et vous enverrons bientôt nos dernières actua</p>
                <p>À très bientôt !</p>
            </div>

            <Link to="/" className="button">Retourner sur la page d’acceuil</Link>
        </div>

    </>
}