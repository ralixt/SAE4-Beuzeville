import Agenda from "./Agenda.jsx";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {database} from "./Database.jsx";


export function ToutAgenda(){
    const [agenda, setAgenda] = useState([]);
        useEffect(() => {
            const query = ref(database, "Agenda");
            return onValue(query, (snapshot) => {
                const data = snapshot.val();

                if (snapshot.exists()) {
                    Object.values(data).map((event) => {
                        setAgenda((agenda) => [...agenda, event]);
                        console.log(event);
                    });


                }
            });
        }, []);
    return <>
             <h2>Agenda</h2>
                <div className='container'>
                    {agenda.map(
                        (event1)=>(
                            <Agenda    titre={event1.Titre}
                                       category={event1.Category}
                                       date1={event1.DateDebut}
                                       date2={event1.DateFin}
                                       horaire={event1.Horaire}>
                            </Agenda>))}
                </div>
    </>
}