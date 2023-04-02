import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'

import './../CSS/Accessibilite.css'



export function Accessibilite(props){

  const [backgroundColor, setbackground]=useState(props.isDark ? "black" : "white")
  const [color, setcolor]=useState('black')
  





const modalStyles = {
   
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      //backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      maxWidth: '400px',
      backgroundColor:{backgroundColor},
    }
  };

  const handleRadioChange = (e) => {
    props.setColor(e.target.value);
    props.setBackground("#121212");
  }
  const handleRadioChangedefault = (e) => {
    props.setColor(e.target.value);
    props.setBackground("white");
  }

  const handleRadioChangeRenforcer = (e) => {
    props.setColor(e.target.value);
    props.setBackground("#121212");
  }

  const handleRadioChangeInterlignageAugmenter=(e)=> {
    props.setInterlignage(2.5)
  }

  const handleRadioChangeInterlignageDefault=(e)=> {
    props.setInterlignage(1.5)
  }

  const handleRadioChangePoliceDyslexique=(e)=> {
    props.setpolice('Open-Dyslexic, sans-serif')
  }

  const handleRadioChangePoliceDefault=(e)=> {
    props.setpolice('Lato')
  }



  return (
    <>
      {props.isOpen && (
        <div className='overlay' onClick={props.onRequestClose}>
          <div className='content' onClick={(e) => e.stopPropagation()}>
            <div className='divTitreX'>
              <h2>Paramètre d'accéssibilité</h2>
              <a onClick={props.onRequestClose}><span class="material-symbols-outlined">close</span></a>
            </div>
            <div className='accessibilites'>
            
          <div className='contraste'>
            <h2>Contraste</h2> <br />
        
          <div className='divContraste'>
          
            <label for="default"> 
            <input type="radio" name="contraste" value="black" id="default" onChange={handleRadioChangedefault}></input>
            <span> Default </span>
            </label>
            
           

          
            <label for="renforcer"> 
            <input type="radio" name="contraste" value="white" id="renforcer" onChange={handleRadioChangeRenforcer}></input>
            <span> Renforcer </span>
            </label>
            
           
          
            <label for="inverser">
            <input type="radio" name="contraste" value="yellow" id="inverser" onChange={handleRadioChange} ></input>
              <span>Inverser</span>
            </label>
            
          
          </div>
       
        
          </div>


          <div className='contraste'>
            <h2>Image</h2>
       
          <div>
            <label for="defaultz">
            <input type="radio" name="imagez" value="defaultz" id="defaultz"></input>
              <span>Default</span>
            
            </label>
            


            <label for="textez">
            <input type="radio" name="imagez" value="textesz" id="textesz"></input>
              <span>Remplacer par du texte</span>
              </label>
            

            </div>
           
        
          </div>


          <div className='contraste'>
            <h2>Interlinages</h2>
          
            <div >
            <label for="defaultss">
            <input type="radio" name="images" value="defaultsss" id="defaultss" onChange={handleRadioChangeInterlignageDefault}></input>
              <span>Default</span>
              </label>
            


            <label for="texte">
            <input type="radio" name="images" value="texte" id="texte" onChange={ handleRadioChangeInterlignageAugmenter}></input>
              <span>Augmenter</span></label>
            
            </div>
           
            
          </div>


          
          <div className='contraste'>
            <h2>Polices</h2>
            
              <div >
            <label for="defaultc">
            <input type="radio" name="police" value="defaultsc" id="defaultc" onChange={handleRadioChangePoliceDefault}></input>
              <span>Default</span>
            
            </label>
            


            <label for="textec">
            <input type="radio" name="police" value="textescc" id="textec" onChange={handleRadioChangePoliceDyslexique}></input>
              <span>Adapter</span>
            </label>
          
            </div>
      
            
          </div>



         

          </div>
        
          </div>
        
        </div>
      )}
    </>
  );
}




