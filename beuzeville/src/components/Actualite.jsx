import { useState , useEffect} from 'react'
import './../App.css'
import {database} from './Database'
import {ref, set, push, onValue} from "firebase/database";


export default function Actualite(props){


    
 
    

    return <>
    
        <div className='template'>
            <div>
                <img src={props.images} alt="fdgfgd" />
                <p>{props.descriptions}</p>
            </div>
            <h2>{props.titres}</h2>
            
    
        </div>
    
    
    
    </>


    
}
