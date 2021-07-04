import company from '../../../assets/img/company.png'
import styled from "styled-components";
import { MdStarBorder, MdStar } from "react-icons/md";

import {useDispatch, useSelector} from 'react-redux'
import {handleTrips, handleCarShop} from '../../../store/actions'

export default function Card(){
    const dispatch = useDispatch()
    const tripsDom = useSelector(state => state.trips)

    async function changeFavorite(id, handle){
        const payload = tripsDom.trips

        payload.forEach(el => {         
            if(el.objectId === id) {
                handle === 'del' ? el.favorite = false : el.favorite = true
            }
        })

        await dispatch(handleTrips(payload))
    }

    async function addShop(id, handle){
        const payload = tripsDom.trips

        payload.forEach(el => {
            if(el.objectId === id) {
                handle === 'del' ? el.carShop = false : el.carShop = true
            }
        })

        await dispatch(handleCarShop(payload))
    }

    return(
        <div>
        {
        tripsDom.trips.map(trip => {
            return (
            <StyleCard key={trip.objectId}>
                <div className="left">
                    
                    {trip.favorite ? <MdStar className="icon active" onClick={() => changeFavorite(trip.objectId, 'del')} /> : <MdStarBorder className="icon" onClick={() => changeFavorite(trip.objectId, 'add')} />}
                    
                    <img src={company} alt="" width="100%"/>
                    <p>{trip.Company.Name}</p>
                </div>
                <div className="mid">
                    <div className="time">
                        <p>{trip.departureTime}</p>
                        <span></span>
                        <p>{trip.arrivalTime}</p>
                    </div>

                    <div className="local">
                        <p>de <span>{trip.Origin}</span></p>
                        <p>para <span>{trip.Destination}</span></p>
                    </div>
                    
                    <h4>{trip.BusClass}</h4>
                </div>
                <div className="right">
                    <div>
                        <p className="currency">{trip.priceMoney}</p>
                        <p className="tax">+ taxas</p>
                    </div>
                    {trip.carShop ? <button onClick={() => addShop(trip.objectId, 'del')}>REMOVER</button> : <button onClick={() => addShop(trip.objectId, 'add')}>COMPRAR</button>}
                </div>
            </StyleCard>
            )
        })
        }
        </div>
    )
}

const StyleCard = styled.section`
    display: flex;
    margin-top: 1rem;
    background: white;
    padding: 0.5rem 0;
    .left {
        width: 20%;
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .icon {
            font-size: 1.3rem;
            cursor: pointer;
        }
        .icon.active {
            color: orange;
        }
        p {
            font-size: 0.8rem;
        }
    }
    .mid {
        width: 55%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 0 1rem;
        .time {
            display: flex;
            align-items: flex-end;
            p {
                color: #808080;
                font-size: 1.2rem;
                &:first-child {
                    color: black;
                    font-weight: bold;
                }
            }
            span {
                margin: 0 1rem 0.5rem 1rem;
                width: 69px;
                height: 2px;
                background: #808080;
            }
        }
        .local {
            color: #808080;
            margin: 0.5rem 0;
            span {
                color: black;
                font-weight: bold;
            }
        }
        h4 {
            color: #2558A3;
            font-weight: 400;
        }
    }
    .right {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0 1rem;
        color: #008A5D;       
        .currency {
            font-size: 1.2rem;
            font-weight: bold;
            span {
                font-size: 0.9rem;
                font-weight: bold;
            }
        }
        .tax {
            color: #808080;
            text-align: right;
        }
        button {
            padding: 0.2rem 1rem;
            background: #008A5D;
            font-size: 1.2rem;
            color: white;
            border: 1px solid #008A5D;
            border-radius: 4px;
            transition: 0.5s ease;
            cursor: pointer;
            &:hover {
                color: #008A5D;
                background: white;
                transition: 0.5s ease;
            }
        }
    }
`