import { useState } from 'react'
import reactLogs from './../assets/soleil.png'
import reactLogos from './../assets/lune.png'
import './../App.css'
export function Header(props){
    const [DarkMode, setDarkMode] = useState(false)
    const [imageDark, setImageDark] = useState(reactLogs)
  
  
    function ToggleImageDarkMode(){
        setDarkMode(!DarkMode);
      if(imageDark==reactLogs){
          setImageDark(reactLogos);
      }
      else if(imageDark==reactLogos){
        setImageDark(reactLogs)
      }
    }
  
  
  
  function  ToggleDarkMode()
  {
      let backgroundColor = "";
      let color = "";
      let styles = "";
  
          if (DarkMode == true) {
              backgroundColor = "white"
              color = "black"
          } else {
              backgroundColor = "black"
              color = "white"
          }
          styles = {backgroundColor, color}
          return styles;
  }
  return <>
    
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Accueil</title>
    </head>
   
    <body style={ToggleDarkMode()}>
      <div>
        <h2>fgfdgfdg</h2>
        <img src={imageDark} onClick={ToggleImageDarkMode}/>
      </div>
      <main>

      </main>

      <footer>
        
      </footer>
    </body>
   
    </html>
    </>
}