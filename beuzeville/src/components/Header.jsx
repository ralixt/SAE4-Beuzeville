import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'
import BeuzevilleLogo from './../assets/beuzeville.png'
import twitterLogo from './../assets/Twitter.svg'
import InstagrammeLogo from './../assets/instagram.svg'
import FacebookLogo from './../assets/Facebook.svg'
import './../App.css'


import { Accessibilite } from './Accessibilite.jsx'
export default function Header(props){
    const [DarkMode, setDarkMode] = useState(false)
    const [imageDark, setImageDark] = useState(reactLogos)
    const [backgroundColor, setBackground]=useState('white')
    const [color, setColor]=useState('black')
    const [modalIsOpen, setModalIsOpen] = useState(false);
   

  
    const handleChangeColor = (color) => {
      setColor(color);
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
        setBackground('#3E3B3B');
        setColor('white');
      }
    }


    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  
  
  return  <div>

        <div>
          <img src={BeuzevilleLogo} alt="Le logo de Beuzeville"  />
 
          </div>    
          <div>
          <img src={twitterLogo} alt="Le logo de Twitter"  />
          <img src={InstagrammeLogo} alt="Le logo de Twitter"  />
          <img src={FacebookLogo} alt="Le logo de Twitter"  />
          </div>
        <button onClick={openModal}><span className={"material-symbols-outlined"}>
            visibility_off
        </span></button>
        <Accessibilite isOpen={modalIsOpen} onRequestClose={closeModal} DarkModes={setDarkMode} setColor={handleChangeColor} setBackground={handleChangeBackgroundColor} isdark={isDark}></Accessibilite>
        <img src={imageDark} onClick={ToggleImageDarkMode}/>
        <style>{`body {background-color: ${backgroundColor}; color:${color}; div: background-color: ${backgroundColor};`}</style>
      </div>
}