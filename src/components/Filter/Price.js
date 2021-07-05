import { MdDirectionsBus, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import {StyleFilterCard} from './style.js'
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips} from '../../store/actions'
import { useState } from "react";
import Alert from '../Alert'

export default function Price(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips)
    const [maxPrice, setMaxPrice] = useState('')
    const [alert, setAlert] = useState(false)
    const [filterPrice, setFilterPrice] = useState(false)

    function handlePrice(value, handle){
        setAlert(false)
        let payload
        if(handle && maxPrice !== '') {
            setFilterPrice(true)
            const trips = state.trips

            payload = trips.filter(item => item.Price <= value.toFixed(2))
        } else {
            setFilterPrice(false)
            payload = state.tripsOriginal
        }       
        payload.length > 0 ? dispatch(handleTrips(payload)) : setAlert(true)
    }

    return(
        <StyleFilterCard>
                <div className="title">
                    <MdDirectionsBus className="icon" />
                    <p>Preço Máximo</p>
                </div>
                <div className="content">
                    <div>
                        R$ <input type="number" value={maxPrice} onChange={(el) => setMaxPrice(+el.target.value)}/>
                    </div>
                    { filterPrice ? <MdCheckBox className="iconCheck active" onClick={() => handlePrice(maxPrice, false)}/> : <MdCheckBoxOutlineBlank className="iconCheck" onClick={() => handlePrice(maxPrice, true)}/> }
                </div>
                <Alert visible={alert} />
            </StyleFilterCard>
    )
}

