import './../CSS/stylesAgenda.css'
import oiseauxAgenda from './../assets/oiseaux.jpg'


export default function Agenda(props){
    function getDate(date1, date2){
        if(date1 != date2){
            return <p className='dateAgenda'>{date1}<br></br><span class="material-symbols-outlined">
            arrow_downward
            </span><br></br>{date2}</p>
        }
        else{
            return <p className='dateAgenda'>{date1}</p>
        }
    
    }
    return <section className='TailleAgenda'>
        <div>
            <div className='imageAgenda'>
                <img className='ImageOiseauxAgenda' src={oiseauxAgenda} alt="image agenda" />
                <p className='categorie'>{props.category}</p>
                {getDate(props.date1, props.date2)}
            </div>
            <h2>{props.titre}</h2>
            <div className='Row'>
                <span class="material-symbols-outlined iconBlue">schedule</span>
                <p>{props.horaire}</p>
            </div>
            <div className='Row'>
                <span class="material-symbols-outlined iconBlue">location_on</span>
                <p>{props.lieu}</p>
            </div>
        </div>
    </section>
}