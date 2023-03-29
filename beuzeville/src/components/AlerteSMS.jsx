import { useState } from 'react'
import './../App.css'
import './../CSS/AlerteSMS.css'
import alertesSMSBackground from '../assets/alertesSMS.jpg'

export function AlerteSMS(props){

    return <> 
        <div id='sms'>
            <img src={alertesSMSBackground} alt="Fond Alertes SMS" id="alertesSMSBackground"/>
            <h1>Alertes SMS</h1>
            <p>Abonnez-vous pour rester informé des alertes de la ville !</p>
                <form>
                    <label for="nom">Nom</label>
                    <input name="nom" type="text" placeholder='Nom'></input>
                    <label for="prenom">Prénom</label>
                    <input name="prenom" type="text" placeholder='Prénom'></input>
                    <label for="numTel">Numéro de téléphone </label>
                    <input name="numTel" type="text"  placeholder='Numéro de téléphone'></input>
                </form>
        </div>
    </>

}
