import './../CSS/stylesFooter.css'
import BeuzevilleLogo from './../assets/beuzeville.png'


export default function Footer(props){
    return <div id='divFooter'>
         <div id="beuzeville" className="Column">
            <a href="/" ><img id="imgBeuz" src={BeuzevilleLogo}/></a>
            <a href="contact" class="Row" id="Contact">
            <span id="iconMail" class="material-symbols-outlined">mail</span>                
            <p>NOUS CONTACTER</p>
            </a>
        </div>
        <div className="Column marginTop">
            <h3>Mairie de Beuzeville</h3>
            <p>Place Général de Gaulle<br/>27210 Beuzeville</p>
            <div className="Row" id='marginPhone'>
                <span className={"material-symbols-outlined"}>call</span>
                <p id="noMargin">02 32 57 70 40</p>
            </div>
        </div>
        <div className="Column marginTop">
            <h3>Horaires d'ouverture</h3>
            <p>Du lundi au vendredi : <br/>9h-12h / 14h-18h</p>
        </div>
        <div className="Column">
            <p>La lettre d'information</p>
            <a href="newsletter" className="buttonFooter">S'abonner</a>
            <p>Alerte SMS</p>
            <a href="alertessms" className="buttonFooter">S'inscrire</a>
        </div>
    </div>
}