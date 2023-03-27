import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'
import BeuzevilleLogo from './../assets/beuzeville.png'
import twitterLogo from './../assets/Twitter.svg'
import InstagrammeLogo from './../assets/instagram.svg'
import FacebookLogo from './../assets/Facebook.svg'
import './../App.css'
import './../../src/styleHeader.css'


import { Accessibilite } from './Accessibilite.jsx'
export default function Header(props){
    const [DarkMode, setDarkMode] = useState(false)
    const [imageDark, setImageDark] = useState(reactLogos)
    const [backgroundColor, setBackground]=useState('white')
    const [color, setColor]=useState('black')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [interlignage, setinterlignage] = useState(1.5);

  
    const handleChangeColor = (color) => {
      setColor(color);
    }
    const handleChangeInterlignage = (interlignage) => {
      setinterlignage(interlignage);
    }

    const handleChangeBackgroundColor = (backgroundColor) => {
      setBackground(backgroundColor);
    }

    function isDark(){
      if(backgroundColor=="white" && color=="black"){
        return true;
      }else if(backgroundColor=="black" && color=="white"){
        return false;
      }
    }
  
    function ToggleImageDarkMode(){
        setDarkMode(!DarkMode);
      if(imageDark==reactLogs){
        setImageDark(reactLogos);
        setBackground('white');
        setColor('black');
         

      }
      else if(imageDark==reactLogos){
        setImageDark(reactLogs);
        setBackground('#121212');
        setColor('white');
      }
    }


    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  
  
  return  <div id='contenair'>

       
          <img src={BeuzevilleLogo} alt="Le logo de Beuzeville" className='logoBeuzeville' />
 
              
          <div className='logoRSX'>
          <img src={twitterLogo} alt="Le logo de Twitter"  />
          <img src={InstagrammeLogo} alt="Le logo de Twitter"  />
          <img src={FacebookLogo} alt="Le logo de Twitter"  />
          </div>
          <div className='inputRecherche'>
            <input type="text" value="" placeholder='Que recherchez-vous ici ?' />
          </div>
          <div className='logoDark'>
            <button onClick={openModal}><span className={"material-symbols-outlined"}>
                visibility_off
            </span>
            </button>
        </div>
        <div className='Accessibilite' >
          <Accessibilite isOpen={modalIsOpen} onRequestClose={closeModal} DarkModes={setDarkMode} setColor={handleChangeColor} setBackground={handleChangeBackgroundColor} isdark={isDark} setInterlignage={handleChangeInterlignage}></Accessibilite>
          <img src={imageDark} onClick={ToggleImageDarkMode}/>

        </div>
        <style>{`body {background-color: ${backgroundColor}; color:${color}; line-height: ${interlignage}; div: background-color: ${backgroundColor};`}</style>
      </div>
}