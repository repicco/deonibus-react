import {StyleFilterCard} from './style.js'
import { MdAirlineSeatReclineExtra, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips} from '../../store/actions'
import { useState } from 'react';


export default function Classes(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips)   
    let objClass = [
        {
            name: 'Convencional',
            enable: false,
        },
        {
            name: 'Executivo',
            enable: false,
        },
        {
            name: 'Leito',
            enable: false,
        },
        {
            name: 'Semi Leito',
            enable: false,
        },
        {
            name: 'Double Deck',
            enable: false,
        }
    ]
    const [busClass, setBusClass] = useState(objClass)
    const [alert, setAlert] = useState(false)

    function handleClass(value, handle){
        setAlert(false)
        let payload

        objClass.forEach(el => {
            if(el.name === value){
                handle ? el.enable = true : el.enable = false
            }
        })

        setBusClass(objClass)

        if(handle) {
            const trips = state.trips
            payload = trips.filter( el => el.BusClass === value)
        } else {
            payload = state.tripsOriginal
        }

        payload.length > 0 ? dispatch(handleTrips(payload)) : setAlert(true)   
    }

    return(
        <StyleFilterCard>
                <div className="title">
                    <MdAirlineSeatReclineExtra className="icon" />
                    <p>Classes</p>
                </div>
                

                {
                    busClass.map( item => (
                        <div className="content" key={item.name}>
                            <p>{item.name}</p>
                            {item.enable
                                ?
                                <>
                                    <div className="clear" onClick={() => handleClass(item.name, false)}>limpar</div>
                                    <MdCheckBox className="iconCheck active" onClick={() => handleClass(item.name, false)}/>
                                </>
                                :
                                <MdCheckBoxOutlineBlank className="iconCheck" onClick={() => handleClass(item.name, true)}/> 
                            }
                            
                        </div>
                    ))
                }
                { alert &&  <p className="alert">Sem resultado para pesquisa</p> }
            </StyleFilterCard>
    )
}