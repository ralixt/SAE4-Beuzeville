import { useState } from 'react'
import './../App.css'
import '../CSS/AlertesSMS.css'
import alertesSMSBackground from '../assets/alertesSMS.jpg'
import {database} from './Database'
import {ref, set, push} from "firebase/database";

export function AlertesSMS(props){

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
            <img src={alertesSMSBackground} alt="Fond Alertes SMS" id="alertesSMSBackground"/>
            <h1>Alertes SMS</h1>
            <p>Abonnez-vous pour rester informé des alertes de la ville !</p>
                <form>
                    <label for="nom">Nom</label>
                    <input name="nom" type="text" placeholder='Nom' value={nom} onChange={e => setNom(e.target.value)}></input>
                    <label for="prenom">Prénom</label>
                    <input name="prenom" type="text" placeholder='Prénom' value={prenom} onChange={e => setPrenom(e.target.value)}></input>
                    <label for="numTel">Numéro de téléphone </label>
                    <input name="numTel" type="text"  placeholder='Numéro de téléphone' value={tel} onChange={e => setTel(e.target.value)}></input>
                    <button type="submit" onClick={send}>Je m'inscris</button>
                </form>
        </div>
    </>

}
