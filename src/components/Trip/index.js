import {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {handleTrips, handleTripsOriginal} from '../../store/actions'


import styled from 'styled-components'
import Options from './Options'
import Card from './Card'
import Filter from '../Filter'

import api from '../../services/api'

export default function Trip(){
    const tripsDom = useSelector(state => state.trips)
    const dispatch = useDispatch()
    
    useEffect(() => {
        async function loadApi(){
            const response = await api.get('/classes/Routes', {
                headers: {
                    'X-Parse-Application-Id': 'LtD1wBDjTJB7CcuF3hNRNmvRI9CQpozYzN7jIxfA',
                    'X-Parse-REST-API-Key': '1TMvuvt9n2qHCqdQ8qpLw7DX6wUQpq2zhq0OGTvp',
                    'content-type': 'application/json'
                }
            })
            const trips = []
            const tripsOriginal = []

            response.data.results.forEach( trip => {
                const locale = { style: 'currency', currency: 'BRL' }
                const priceMoney = trip.Price.toLocaleString("pt-BR", locale)

                const departureTime = trip.DepartureDate.iso.substring(11, 16)
                const arrivalTime = trip.ArrivalDate.iso.substring(11, 16)

                const favorite = false
                const carShop = false                

                trips.push({...trip, priceMoney, departureTime, arrivalTime, favorite, carShop})
                tripsOriginal.push({...trip, priceMoney, departureTime, arrivalTime, favorite, carShop})
            })
         
            await dispatch(handleTrips(trips))
            await dispatch(handleTripsOriginal(tripsOriginal))
        }
        loadApi()
    }, [dispatch])
    if(tripsDom.trips.length !== 0){
        return (
            <>   
                <StyleTripMain>
                    <Options/>
                    <Card />
                </StyleTripMain>   
                <StyleTripAside>
                    <Filter/>
                </StyleTripAside>
            </>
        )
    }
    return (
        <div>
            Carregando...
        </div>
    )
    
}

const StyleTripMain = styled.main`
    width: 63%;
    margin-right: 1%;
`
const StyleTripAside = styled.aside`
    width: 33%;
    margin-left: 1%;
`
