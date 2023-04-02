import './../CSS/stylesAgenda.css'
import oiseauxAgenda from './../assets/oiseaux.jpg'


export default function Agenda(props){
    return <section>
        <h1>Agenda</h1>
        <div>
            <img class='ImageOiseauxAgenda' src={oiseauxAgenda} alt='image evenement agenda'/>
            <h3>Titre</h3>
            <div className='Row'>
                <span class="material-symbols-outlined iconBlue">schedule</span>
                <p>14:00 - 18:00</p>
            </div>
            <div className='Row'>
                <span class="material-symbols-outlined iconBlue">location_on</span>
                <p>Gymnase</p>
            </div>
        </div>
        <div id='buttonEvent'>
            <button className='BackgroundBlue'>Voir tous les évènements</button>
        </div>

    </section>
}