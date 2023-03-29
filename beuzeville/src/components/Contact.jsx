// import { getDatabase, ref } from'https://beuzeville-2cd10-default-rtdb.europe-west1.firebasedatabase.app/'// Ici le code qui initialise la variable app. const database = getDatabase(app);
import {database} from './Database'


export default function Contact(props){

    function writeMail(){
        set(push(ref(database, 'Contact')),
            {
                Prenom: "john",
                Nom: "Berger",
                AdressePostale: "",
                ComplémentAdresse: "",
                Ville: "",
                CodePostal: "",
                Telephone: "0625489712",
                ObjetMessage: "",
                Message: "",
            }
        )
    }
//usestate sur chaque valeurs pour ensuite lier une fonction pour envoyer le tout sur la bdd
return <>
    <h1>Contact</h1>
    <div>
        <form>
            <h2>Vos Informations</h2>
            <label>Nom</label>
            <input type="text" name="name" placeholder="Nom"/>
            <label>Prénom</label>
            <input type="text" name="name" placeholder="Prénom"/>
            <h2>Vos coordonées</h2>
            <label>Adresse</label>
            <input type="text" name="name" placeholder="adresse"/>
            <label>Code Postal</label>
            <input type="number" name="name" placeholder="Code postal"/>
            <label>Téléphone</label>
            <input type="number" name="name" placeholder="Téléphone"/>
            <label>Ville</label>
            <input type="text" name="name" placeholder="Ville"/>
            <label>Courriel</label>
            <input type="email" name="name" placeholder="Courriel"/>
            <h2>Votre Message</h2>
            <label>Objet du message</label>
            <input type="text" name="name" placeholder="Objet du message"/>
            <label>Message</label>
            <textarea name="name" placeholder="Message"/>
            <input type="checkbox" name="name" placeholder="Prénom"/>
            <label>En envoyant ce formulaire, j’accepte que mes données personnelles soient utilisées pour mener à bien ma demande. En savoir plus *</label>
            <button type="submit">Envoyer</button>
        </form>
    </div>
</>
}