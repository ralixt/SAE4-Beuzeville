import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'
import './../App.css'


export function Accessibilite(props){

const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      
     
    },
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
      backgroundColor:'black'
    }
  };

  const handleRadioChange = (e) => {
    props.setColor(e.target.value);
  }

  return (
    <>
    <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </head>
      {props.isOpen && (
        <div style={modalStyles.overlay} onClick={props.onRequestClose}>
          <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
            <h2>Paramètre d'accéssibilité</h2>
          <div>
            <h1>Contraste</h1>
        <form>
            <label for="default">Default</label>
            <input type="radio" name="contraste" value="default" id="default"></input>


            <label for="renforcer">Renforcer</label>
            <input type="radio" name="contraste" value="renforcer" id="renforcer"></input>


            <label for="inverser">Inverser</label>
            <input type="radio" name="contraste" value="yellow" id="inverser" onChange={handleRadioChange}></input>
        </form>
          </div>


          <div>
            <h1>Image</h1>
        <form>
            <label for="default">Default</label>
            <input type="radio" name="image" value="default" id="default"></input>


            <label for="texte">Remplacer par du texte</label>
            <input type="radio" name="image" value="texte" id="texte"></input>


           
        </form>
          </div>




            <button onClick={props.onRequestClose}><span class="material-symbols-outlined">close</span></button>
          </div>
        </div>
      )}
    </>
  );
}




