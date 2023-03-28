import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'
import './../App.css'



export function Accessibilite(props){

  const [backgroundColor, setbackground]=useState(props.isDark ? "black" : "white")
  const [color, setcolor]=useState('black')
  





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

  const handleRadioChangePolice=(e)=> {
    props.setpolice('OpenDyslexic')
  }



  return (
    <>
      {props.isOpen && (
        <div style={modalStyles.overlay} onClick={props.onRequestClose}>
          <div style={modalStyles.content} onClick={(e) => e.stopPropagation()}>
            <h2>Paramètre d'accéssibilité</h2>
          <div>
            <h2>Contraste</h2>
        <form>
            <label for="default">Default</label>
            <input type="radio" name="contraste" value="black" id="default" onChange={handleRadioChangedefault}></input>


            <label for="renforcer">Renforcer</label>
            <input type="radio" name="contraste" value="white" id="renforcer" onChange={handleRadioChangeRenforcer}></input>


            <label for="inverser">Inverser</label>
            <input type="radio" name="contraste" value="yellow" id="inverser" onChange={handleRadioChange} ></input>
        </form>
          </div>


          <div>
            <h2>Image</h2>
        <form>
            <label for="default">Default</label>
            <input type="radio" name="image" value="default" id="default"></input>


            <label for="texte">Remplacer par du texte</label>
            <input type="radio" name="image" value="texte" id="texte"></input>


           
        </form>
          </div>


          <div>
            <h2>Interlinages</h2>
            <label for="default">Default</label>
            <input type="radio" name="image" value="default" id="default" onChange={handleRadioChangeInterlignageDefault}></input>


            <label for="texte">Augmenter</label>
            <input type="radio" name="image" value="texte" id="texte" onChange={ handleRadioChangeInterlignageAugmenter}></input>

          </div>


          
          <div>
            <h2>Polices</h2>
            <label for="default">Default</label>
            <input type="radio" name="police" value="default" id="default"></input>


            <label for="texte">Adapter</label>
            <input type="radio" name="police" value="texte" id="texte" onChange={handleRadioChangePolice}></input>

          </div>




            <button onClick={props.onRequestClose}><span class="material-symbols-outlined">close</span></button>
          </div>
        </div>
      )}
    </>
  );
}




