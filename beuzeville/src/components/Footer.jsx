import './../CSS/stylesFooter.css'

export default function Footer(props){
    return <footer>
         <div id="beuzeville" className="Column">
            <img  src="beuzeville.png"/>
            <a href="#" class="Row" id="Contact">
                <img id="iconMail" src="mail.png" alt="icon mail"/>
                <p>NOUS CONTACTER</p>
            </a>
        </div>
        <div className="Column">
            <h3>Mairie de Beuzeville</h3>
            <p>Place Général de Gaulle<br/>27210 Beuzeville</p>
            <div className="Row">
                <img id="phone" src="phone.png" alt="icon phone"/>
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