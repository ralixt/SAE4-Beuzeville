import { useState , useEffect} from 'react'
import './../App.css'
import {database} from './Database'
import {ref, set, push, onValue} from "firebase/database";


export default function Actualite(props){


    
 
    

    return <div>
       
    <div>

    <h2>{props.titres}</h2>
    <p>{props.descriptions}</p>
    <img src={props.images} alt="fdgfgd" />
   
    </div>
    
    
    </div>


    
}
