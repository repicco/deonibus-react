import { MdStars, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import {StyleFilterCard} from './style.js'
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips, handleTripsOriginal} from '../../store/actions'
import {useState} from 'react'
import Alert from '../Alert'

export default function Favorites(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips)
    const [filterFavorites, setFilterFavorites] = useState(false)
    const [alert, setAlert] = useState(false)

    function handleFavorites(handle){
        setAlert(false)
        let payload

        if(handle) {
            setFilterFavorites(true)
            const trips = state.trips
            payload = trips.filter( el => el.favorite === true)
            dispatch(handleTripsOriginal(trips))
        } else {
            setFilterFavorites(false)
            payload = state.tripsOriginal
        }

        payload.length > 0 ? dispatch(handleTrips(payload)) : setAlert(true)
    }

    return(
        <StyleFilterCard>
                <div className="title">
                    <MdStars className="icon" />
                    <p>Favoritos</p>
                </div>                
                <div className="content">
                    <p>apenas opções favoritas</p>
                    { filterFavorites ? <MdCheckBox className="iconCheck active" onClick={() => handleFavorites(false)}/> : <MdCheckBoxOutlineBlank className="iconCheck" onClick={() => handleFavorites(true)}/> }
                </div>
                <Alert visible={alert} />
            </StyleFilterCard>
    )
}