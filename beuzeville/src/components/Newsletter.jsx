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
            <div className='imageNewsletter'>
                <img src={newsletter} alt="image pour la newsletter" />

            </div>
            
              
            
                    <h1>Newsletter</h1>
                    <p>Abonnez-vous pour rester informé des alertes de la ville !</p>
                        <form method='Post' action=''>
                            <label for="mail">Saissisez votre addresse E-mail ci dessous : <span className='obligatoire'>*</span></label>
                            <input id="inputMail"name="mail" type="email" placeholder='Votre e-mail'  value={mail} onChange={e => setmail(e.target.value)} required/>
                        
                        
          
            
            <div className='checkboxAcceptation'>
                
                <input type="checkbox" name="acceptation" id="acceptation" required/>
                <label for="acceptation">j'accepte de recevoir les newsletter <span className='obligatoire'>*</span></label>
            
            </div>
           
        <div className='divButton'>
            <button type="submit" onClick={send}>Je m'inscris</button>
        </div>  
        </form>

        </div>
        <br /><br />
    </>

}
