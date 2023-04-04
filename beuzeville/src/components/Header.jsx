import { useState } from 'react'
import reactLogs from './../assets/soleilssss.png'
import reactLogos from './../assets/lune.png'
import BeuzevilleLogo from './../assets/beuzeville.png'
import twitterLogo from '../assets/ResauxSociaux/Twitter.svg'
import InstagrammeLogo from '../assets/ResauxSociaux/Instagram.svg'
import FacebookLogo from '../assets/ResauxSociaux/Facebook.svg'
import './../App.css'
import '../CSS/styleHeader.css'


import { Accessibilite } from './Accessibilite.jsx'
export default function Header(props){
    const [DarkMode, setDarkMode] = useState(false)
    const [imageDark, setImageDark] = useState(reactLogos)
    const [backgroundColor, setBackground]=useState('white')
    const [color, setColor]=useState('black')
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [interlignage, setinterlignage] = useState(1.5);
    const [police, setPolice]=useState('Lato')

  
    const handleChangeColor = (color) => {
      setColor(color);
    }

    const handleChangePolice = (police) => {
      setPolice(police);
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
      <div className="menuBoutton">
          <span className="material-symbols-outlined blue">menu</span>
          <p>MENU</p>
      </div>


          <div className='logoRSX'>
          <img src={twitterLogo} alt="Le logo de Twitter"  />
          <img src={InstagrammeLogo} alt="Le logo de Twitter"  />
          <img src={FacebookLogo} alt="Le logo de Twitter"  />
          </div>
          <div className='inputRecherche'>
            <input type="text" value="" placeholder='Que recherchez-vous ici ?' />
            <span class="material-symbols-outlined">search</span>
          </div>
          <div className='logoDark'>
            <a onClick={openModal}><span className={"material-symbols-outlined"}>
                visibility_off
            </span>
            </a>
        </div>
        <div className='Accessibilite' >
          <Accessibilite isOpen={modalIsOpen} onRequestClose={closeModal} DarkModes={setDarkMode} setColor={handleChangeColor} setBackground={handleChangeBackgroundColor} isdark={isDark} setInterlignage={handleChangeInterlignage} setpolice={handleChangePolice}></Accessibilite>
          <img src={imageDark} onClick={ToggleImageDarkMode}/>

        </div>
        <style>{`body {background-color: ${backgroundColor}; color:${color};  line-height: ${interlignage}; font-family: ${police};} #divFooter{background-color: ${backgroundColor}; color:${color};} a{background-color: ${backgroundColor}; color:${color};}`}</style>
       
      </div>
}