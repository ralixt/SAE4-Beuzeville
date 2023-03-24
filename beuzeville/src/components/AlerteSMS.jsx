import { useState } from 'react'
import './../App.css'


export function AlerteSMS(props){

    return <>

        <h1>Alertes SMS</h1>
        <form>
            <label for="nom">Nom</label>
            <input name="nom" type="text"
                   value={nomTicket}
                   onChange={e=> setNomTicket(e.target.value)}>
            </input>
            <label for="prenom">Prénom</label>
            <input name="prenom" type="text"
                   value={nomTicket}
                   onChange={e=> setNomTicket(e.target.value)}>
            </input>
            <label for="numTel">Numéro de téléphone </label>
            <input name="numTel" type="text"
                   value={nomTicket}
                   onChange={e=> setNomTicket(e.target.value)}>
            </input>
        

        </form>
    </>
        
        


    


}
