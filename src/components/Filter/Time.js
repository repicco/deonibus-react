import {StyleFilterCard} from './style'
import { MdSchedule, MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips} from '../../store/actions'
import { useState } from 'react';
import Alert from '../Alert'

export default function Time(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips) 
    const [alert, setAlert] = useState(false)
    let objTimes = [
        {
            name: 'Madrugada (00h:00 - 5h:59)',
            enable: false,
            min: '0000',
            max: '0559',
        },
        {
            name: 'Manhã (06h:00 - 11:59)',
            enable: false,
            min: '0600',
            max: '1159',
        },
        {
            name: 'Tarde (12h:00 - 17:59)',
            enable: false,
            min: '1200',
            max: '1759',
        },
        {
            name: 'Noite (18h:00 - 23:59)',
            enable: false,
            min: '1800',
            max: '2359',
        },
    ]
    const [times, setTimes] = useState(objTimes)

    function handleTime(min, max, handle){
        setAlert(false)
        let payload

        objTimes.forEach(el => {
            if(el.min === min && el.max === max){
                handle ? el.enable = true : el.enable = false
            }
        })

        setTimes(objTimes)

        if(handle) {
            const trips = state.trips
            payload = trips.filter( el => {
                const departure = +el.departureTime.replace(':', '')
                if( departure >= +min  && departure <= +max) return el
            })
        } else {
            payload = state.tripsOriginal
        }

        payload.length > 0 ? dispatch(handleTrips(payload)) : setAlert(true)   
    }

    return(
        <StyleFilterCard>
            <div className="title">
                <MdSchedule className="icon" />
                <p>Horário de saída</p>
            </div>
            <div className="clear">
                limpar
            </div>
            <div className="location">
                <p>Rodoviária do Tietê - São Paulo - SP <span className="next one">&#62;</span> <span className="next two">&#62;</span> <span className="next three">&#62;</span> <span className="next four">&#62;</span> <span className="next five">&#62;</span></p>
            </div>
            
            {
                times.map( item => (
                    <div className="content" key={item.name}>
                        <p>{item.name}</p>
                        {item.enable
                            ?
                            <>
                                <div className="clear" onClick={() => handleTime(item.min, item.max, false)}>limpar</div>
                                <MdCheckBox className="iconCheck active" onClick={() => handleTime(item.min, item.max, false)}/>
                            </>
                            :
                            <MdCheckBoxOutlineBlank className="iconCheck" onClick={() => handleTime(item.min, item.max, true)}/> 
                        }
                        
                    </div>
                ))
            }
            <Alert visible={alert} />
        </StyleFilterCard>
    )
}