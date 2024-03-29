import { useState } from 'react'
import './../App.css'
import '../CSS/AlertesSMS.css'
import alertesSMSBackground from '../assets/alertesSMS.jpg'
import {database} from './Database'
import {ref, set, push} from "firebase/database";
import {Link} from "react-router-dom";

export function AlertesSMS(){

    const [nom, setNom]=useState("");
    const [prenom, setPrenom]=useState("");
    const[tel, setTel]=useState("");
    function send(){
        set(push(ref(database, 'SmsAlertes')),
            {
                nom : nom,
                prenom : prenom,
                tel : tel
            }
        )
    }



    return <>
        <div id='sms'>
            <div className="divBackground">
                <img src={alertesSMSBackground} alt="Fond Alertes SMS" id="alertesSMSBackground"/>
            </div>

            <h1>Alertes SMS</h1>
            <p id="subtitle">Abonnez-vous pour rester informé des alertes de la ville !</p>
            <form method="post">


                <label for="nom">Nom<span className="obligatoire">*</span></label>
                <input className="inputAlertesSMS" name="nom" type="text" placeholder='Nom' value={nom} onChange={e => setNom(e.target.value)}></input>

                <label for="prenom">Prénom<span className="obligatoire">*</span></label>
                <input className="inputAlertesSMS" name="prenom" type="text" placeholder='Prénom' value={prenom} onChange={e => setPrenom(e.target.value)}></input>

                <label for="numTel">Numéro de téléphone<span className="obligatoire">*</span></label>
                <input className="inputAlertesSMS" name="numTel" type="tel"  pattern="[0-9]{10}" size="10" placeholder='Numéro de téléphone' value={tel} onChange={e => setTel(e.target.value)}></input>



                <div>
                    <input type="checkbox" id="scales" name="scales" required></input>
                    <label htmlFor="scales">J'accepte de recevoir les alertes par sms <span className="obligatoire">*</span></label>
                </div>

                <div id="divButton">
                    <Link to="/confirmationAlertesSMS" className="buttonSMS" onClick={send}>Je m'inscris</Link>
                </div>

            </form>
        </div>
    </>

}
