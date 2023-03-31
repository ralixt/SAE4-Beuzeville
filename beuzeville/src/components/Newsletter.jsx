import { useState } from 'react'
import newsletter from './../assets/newsletter.jpg'
import './../App.css'
import './../CSS/newsletter.css'
import {database} from './Database'
import {ref, set, push} from "firebase/database";


export function Newsletter(props){
    const[mail, setmail]=useState("");
    function send(

    ){
        set(push(ref(database, 'Newsletter')),
            {
                adresseMail : mail,
            },
        )
    }

    return <> 
        <div id='news'>
            
                <img id="imageNewsletter"src={newsletter} alt="image pour la newsletter" />
            
              
            
                    <h1>Newsletter</h1>
                    <p>Abonnez-vous pour rester informé des alertes de la ville !</p>
                        <form>
                            <label for="mail">Saissisez votre addresse E-mail ci dessous :</label>
                            <input name="mail" type="email" placeholder='Votre e-mail'  value={mail} onChange={e => setmail(e.target.value)}></input>
                        
                        </form>
          
            
                <label for="acceptation">j'accepte de recevoir les newsletter * </label>
                <input type="checkbox" name="acceptation" id="acceptation" />
           

            <button type="submit" onClick={send}>Je m'inscris</button>
            

        </div>
        <br /><br />
    </>

}
