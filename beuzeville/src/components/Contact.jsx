// import { getDatabase, ref } from'https://beuzeville-2cd10-default-rtdb.europe-west1.firebasedatabase.app/'// Ici le code qui initialise la variable app. const database = getDatabase(app);
import {database} from './Database'


export default function Contact(props){
    const[Prenom, setPrenom]=useState("");
    const[Nom, setNom]=useState("");
    const[AdressePostale, setAdressePostale]=useState("");
    const[Telephone, setTelephone]=useState("");
    const[Ville, setVille]=useState("");
    const[CodePostal, setCodePostale]=useState("");
    const[Email, setEmail]=useState("");
    const[ObjetMessage, setObjetMessage]=useState("");
    const[Message, setMessage]=useState("");
    function sendDataContact(){
        set(push(ref(database, 'Contact')),
            {
                Prenom,
                Nom,
                AdressePostale,
                Email,
                Ville,
                CodePostal,
                Telephone,
                ObjetMessage,
                Message,
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
            <input type="text" name="name" placeholder="Nom" required/>
            <label>Prénom</label>
            <input type="text" name="name" placeholder="Prénom" required/>
            <h2>Vos coordonées</h2>
            <label>Adresse</label>
            <input type="text" name="name" placeholder="adresse" required/>
            <label>Code Postal</label>
            <input type="number" name="name" placeholder="Code postal" required/>
            <label>Téléphone</label>
            <input type="number" name="name" placeholder="Téléphone" required/>
            <label>Ville</label>
            <input type="text" name="name" placeholder="Ville" required/>
            <label>Courriel</label>
            <input type="email" name="name" placeholder="Courriel" required/>
            <h2>Votre Message</h2>
            <label>Objet du message</label>
            <input type="text" name="name" placeholder="Objet du message" required/>
            <label>Message</label>
            <textarea name="name" placeholder="Message" value={Message} onChange={setMessage} required/>
            <input type="checkbox" name="name" required/>
            <label>En envoyant ce formulaire, j’accepte que mes données personnelles soient utilisées pour mener à bien ma demande. En savoir plus *</label>
            <button type="submit" onSubmit={sendDataContact}>Envoyer</button>
        </form>
    </div>
</>
}