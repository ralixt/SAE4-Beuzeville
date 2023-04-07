import { useState } from 'react'
import './../App.css'
import './../CSS/NotFound.css'
import {Link} from "react-router-dom";
import rick from "../assets/never-gonna.gif"

export function NotFound(){
    return <>
        <div id='page404'>
            <span class="material-symbols-outlined errorIcon">error</span>
            <h1>Erreur 404</h1>
            <p>Oups ! La page que vous demandez n'a pas été trouvée…</p>
            <Link to="/" className="button">Retourner sur la page d’acceuil</Link>
            {/*<img src={rick} alt="Rick Roll"/>*/}
        </div>


    </>
}