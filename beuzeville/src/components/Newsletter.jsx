import { useState } from 'react'
import newsletter from './../assets/newsletter.jpg'
import './../App.css'
import './../CSS/newsletter.css'


export function Newsletter(props){

    return <> 
        <div id='news'>
            <div>
                <img src={newsletter} alt="image pour la newsletter" />
            </div>
            <div>
                    <h1>Newsletter</h1>
                    <p>Abonnez-vous pour rester informé des alertes de la ville !</p>
                        <form>
                            <label for="mail">Saissisez votre addresse E-mail ci dessous :</label>
                            <input name="mail" type="email" placeholder='Votre e-mail'></input>
                        
                        </form>
            </div>
            <div>
                <label for="acceptation">j'accepte de recevoir les newsletter * </label>
                <input type="checkbox" name="acceptation" id="acceptation" />
            </div>

            <button type="submit">Je m'inscris</button>
            

        </div>
    </>

}
