import { useState , useEffect} from 'react'
import './../App.css'
import {database} from './Database'
import {ref, set, push, onValue} from "firebase/database";


export default function Actualite(props){


    function getDate(dateString) {
        const now = new Date();
        const targetDate = new Date(dateString);
        const differenceInTime =  now.getTime()- targetDate.getTime() ;
        const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
        
        if (differenceInDays > 7) {
          const options = { year: 'numeric', month: 'long', day: 'numeric' };
          return "le "+targetDate.toLocaleDateString('fr-FR', options);
        } else {
            if(differenceInDays<0 || differenceInDays==0){
                return "Publié Aujourd'hui";
            }
            if(differenceInDays==1){
                return "Il y'a "+differenceInDays.toString() + " jour";
            }
          return "Il y'a "+ differenceInDays.toString() + " jours";
        }
      }
 
    

    return <>
    
        <div className='template'>
            
            <div className='imageActu'>
                <img src={props.images} alt="fdgfgd" />
                <p>{props.descriptions}</p>
            </div>
                
                <div>
            <h2>{props.titres}</h2>
            <div className='desc'>
                  <span>{getDate(props.date)}  </span>

                </div>
            </div>
        </div>
    
    
    
    </>


    
}
