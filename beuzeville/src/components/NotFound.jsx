import { useState } from 'react'
import './../App.css'
import {Link} from "react-router-dom";

export function NotFound(props){
    return <>
        <div>
            <h1>Erreur 404</h1>
            <p>Oups ! La page que vous demandez n'a pas été trouvée…</p>
            <Link to="/" className="btn btn-primary">Retourner sur la page d’acceuil</Link>
        </div>


    </>
}