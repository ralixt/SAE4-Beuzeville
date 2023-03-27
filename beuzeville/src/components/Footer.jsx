import './../CSS/stylesFooter.css'
import BeuzevilleLogo from './../assets/beuzeville.png'


export default function Footer(props){
    return <footer>
         <div id="beuzeville" className="Column">
            <img  src={BeuzevilleLogo}/>
            <a href="#" class="Row" id="Contact">
            <span class="material-symbols-outlined">mail</span>                <p>NOUS CONTACTER</p>
            </a>
        </div>
        <div className="Column">
            <h3>Mairie de Beuzeville</h3>
            <p>Place Général de Gaulle<br/>27210 Beuzeville</p>
            <div className="Row">
                <span className={"material-symbols-outlined"}>call</span>
                <p id="noMargin">02 32 57 70 40</p>
            </div>
        </div>
        <div className="Column">
            <h3>Horaires d'ouverture</h3>
            <p>Du lundi au vendredi : <br/>9h-12h / 14h-18h</p>
        </div>
        <div className="Column">
            <p>La lettre d'information</p>
            <a className="buttonFooter">S'abonner</a>
            <p>Alerte SMS</p>
            <a className="buttonFooter">Rester Informé</a>
        </div>
    </footer>
}