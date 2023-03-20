import { useState } from 'react'
import reactLogs from './../assets/soleil.svg'
import reactLogos from './../assets/lune.png'
import './../App.css'


import { Accessibilite } from './Accessibilite.jsx'
export function Header(props){
    const [DarkMode, setDarkMode] = useState(false)
    const [imageDark, setImageDark] = useState(reactLogos)
    const [backgroundColor, setbackground]=useState('white')
    const [color, setcolor]=useState('black')
    const [modalIsOpen, setModalIsOpen] = useState(false);
   

  
    const handleChangeColor = (color) => {
      setcolor(color);
    }

    const handleChangeBackgroundColor = (backgroundColor) => {
      setbackground(backgroundColor);
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
        setbackground('white');
        setcolor('black');
         

      }
      else if(imageDark==reactLogos){
        setImageDark(reactLogs);
        setbackground('#3E3B3B');
        setcolor('white');
      }
    }


    function openModal() {
      setModalIsOpen(true);
    }
  
    function closeModal() {
      setModalIsOpen(false);
    }
  
  
  
  
 
  
      
        
  return <header>
    <head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    </head>
    
   
    
      <div>
        <h2>fgfdgffdgss</h2>
        <button onClick={openModal}><span class="material-symbols-outlined">
            visibility_off
        </span></button>
        <Accessibilite isOpen={modalIsOpen} onRequestClose={closeModal} DarkModes={setDarkMode} setColor={handleChangeColor} setBackground={handleChangeBackgroundColor} isdark={isDark}></Accessibilite>
        <img src={imageDark} onClick={ToggleImageDarkMode}/>
        <style>{`body {background-color: ${backgroundColor}; color:${color}; div: background-color: ${backgroundColor};`}</style>
      </div>
      
    </header>
}