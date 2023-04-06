// import { getDatabase, ref } from'https://beuzeville-2cd10-default-rtdb.europe-west1.firebasedatabase.app/'// Ici le code qui initialise la variable app. const database = getDatabase(app);
import {database} from './Database'
import { useState } from 'react'
import {ref, set, push} from "firebase/database";
import './../CSS/stylesContact.css'




export default function Contact(props){
    const[Prenom, setPrenom]=useState("");
    const[Nom, setNom]=useState("");
    const[AdressePostale, setAdressePostale]=useState("");
    const[Telephone, setTelephone]=useState("");
    const[Ville, setVille]=useState("");
    const[CodePostal, setCodePostal]=useState("");
    const[Email, setEmail]=useState("");
    const[ObjetMessage, setObjetMessage]=useState("");
    const[Message, setMessage]=useState("");
    
    function sendDataContact(){
        set(push(ref(database, 'Contact')),
            {
                Prenom: Prenom,
                Nom: Nom,
                AdressePostale: AdressePostale,
                Email: Email,
                Ville: Ville,
                CodePostal: CodePostal,
                Telephone: Telephone,
                ObjetMessage: ObjetMessage,
                Message: Message
            }
        )
    }
//usestate sur chaque valeurs pour ensuite lier une fonction pour envoyer le tout sur la bdd
return <>
    <h1>Contact</h1>
    <div>
        <form className='size90'>
            <section>
                <h2>Vos Informations</h2>
                <div className='Row1'>
                    <div className='Column size40 noMarginLeft'>
                        <label>Nom</label>
                        <input className='InputContact' type="text" name="name" placeholder="Nom"  value={Nom} onChange={e => setNom(e.target.value)} required/>
                    </div>
                    <div className='Column size40 noMarginRight'>
                        <label>Prénom</label>
                        <input className='InputContact' type="text" name="name" placeholder="Prénom"  value={Prenom} onChange={e => setPrenom(e.target.value)} required/>
                    </div>
                </div>
            </section>
            <section>
                <h2>Vos coordonées</h2>
                <div className='Column'>
                    <label>Adresse</label>
                    <input className='InputContact' type="text" name="name" placeholder="adresse"  value={AdressePostale} onChange={e => setAdressePostale(e.target.value)} required/>
                </div>
                <div className='Row1'>
                    <div className='Column size40 noMarginLeft'>
                        <label>Code Postal</label>
                        <input className='InputContact' type="number" name="name" placeholder="Code postal"  value={CodePostal} onChange={e => setCodePostal(e.target.value)} required/>
                    </div>
                    <div className='Column size40 noMarginRight'>
                        <label>Téléphone</label>
                        <input className='InputContact' type="number" name="name" placeholder="Téléphone"  value={Telephone} onChange={e => setTelephone(e.target.value)} required/>
                    </div>
                </div>
                <div className='Row1'>
                    <div className='Column size40 noMarginLeft'>
                        <label>Ville</label>
                        <input className='InputContact' type="text" name="name" placeholder="Ville"  value={Ville} onChange={e => setVille(e.target.value)} required/>
                    </div>
                    <div className='Column size40 noMarginRight'>
                        <label>Courriel</label>
                        <input className='InputContact' type="email" name="name" placeholder="Courriel"  value={Email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                </div>
            </section>
            <section>
                <h2>Votre Message</h2>
                <label>Objet du message</label>
                <input className='InputContact' type="text" name="name" placeholder="Objet du message"  value={ObjetMessage} onChange={e => setObjetMessage(e.target.value)} required/>
                <label>Message</label>
                <textarea className='areaMessage' name="name" placeholder="Message" value={Message} onChange={e => setMessage(e.target.value)} required/>
                <div className='Row'>
                    <input id='checkContact' type="checkbox" name="name" required/>
                    <label>En envoyant ce formulaire, j’accepte que mes données personnelles soient utilisées pour mener à bien ma demande. <a href='/404'>En savoir plus</a> *</label>
                </div>
            </section>
            <button id='buttonContact' type="submit" onClick={sendDataContact}>Envoyer</button>
        </form>
    </div>
</>
}