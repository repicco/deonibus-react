import via1001 from '../../../assets/img/1001.png'
import cometa from '../../../assets/img/cometa.png'
import catarinense from '../../../assets/img/catarinense.png'

import styled from "styled-components";
import { MdStarBorder, MdStar } from "react-icons/md";

import {useDispatch, useSelector} from 'react-redux'
import {handleTrips, handleCarShop} from '../../../store/actions'
import Modal from '../../Modal'
import {useState} from 'react'
import { BsBookmarkPlus } from "react-icons/bs";


export default function Card(){
    const dispatch = useDispatch()
    const tripsDom = useSelector(state => state.trips)
    const [favorite, setFavorite] = useState()
    const [modalPayload, setModalPayload] = useState([])

    function handleFavorite(){
        setFavorite(false)
    }

    async function selectFavorite(trip){
        await setModalPayload(trip)
        setFavorite(true)  
    }

    async function changeFavorite(id, handle){
        const payload = tripsDom.trips

        payload.forEach(el => {         
            if(el.objectId === id) {
                handle === 'del' ? el.favorite = false : el.favorite = true
            }
        })

        await dispatch(handleTrips(payload))
        handleFavorite()
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
                    {/* {trip.favorite ? <MdStar className="icon active" onClick={() => changeFavorite(trip.objectId, 'del')} /> : <MdStarBorder className="icon" onClick={() => changeFavorite(trip.objectId, 'add')} />} */}
                    {trip.favorite ? <MdStar className="icon active" onClick={() => changeFavorite(trip.objectId, 'del')}  /> : <MdStarBorder className="icon" onClick={() => selectFavorite([trip])} /> }
                    
                    <img src={ trip.Company.Name === 'Catarinense' ? catarinense : trip.Company.Name === 'Cometa' ? cometa : via1001} alt="" width="100%"/>
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
                    {trip.carShop ? <button onClick={() => addShop(trip.objectId, 'del')}>REMOVER</button> : <button onClick={() => addShop(trip.objectId, 'add')}>+CARRINHO</button>}
                </div>
            </StyleCard>
            )
        })
        }
        <Modal visible={favorite} title={'Favoritos'} setVisible={handleFavorite}>
            <StyleFavorite>
                <p>Deseja adicionar a viagem abaixo aos seus favoritos?</p>                
                {
                    modalPayload.length > 0 &&
                    modalPayload.map(trip => {
                        return(
                            <>
                            <div className="local">
                                <p>de: <span>{trip.Origin}</span></p>
                                <p>para: <span>{trip.Destination}</span></p>
                            </div>
                            <p className="currency">{trip.priceMoney}</p>

                                <div className="footer">
                                    <BsBookmarkPlus className="icon"/>
                                    <div className="btnContent">
                                        <button onClick={handleFavorite} >Cancelar</button>
                                        <button onClick={() => changeFavorite(trip.objectId, 'add')} >Adicionar</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }             
            </StyleFavorite>  
        </Modal>
        </div>
    )
}

const StyleCard = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    background: white;
    border-radius: 8px;
    padding: 0.5rem 0;
    @media(min-width: 920px){
        flex-direction: row;
    }
    .left {
        display: flex;
        justify-content: space-around;
        margin: 0.5rem 0;
        img {
            max-width: 100px;
            height: 100%;
        }
        @media(min-width: 920px){
            width: 20%;
            padding: 0 1rem;
            flex-direction: column;
            justify-content: space-between;
            img {
                height: auto;
                padding: 0.5rem;
            }
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
    }
    .mid {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem 0;
        .time {
            display: flex;
            justify-content: space-around;
            p {
                color: #808080;
                font-size: clamp(16px,2vw,18px);
                &:first-child {
                    color: black;
                    font-weight: bold;
                }
            }
            span {
                margin: 0.5rem 1rem 0rem 1rem;
                width: 33px;
                height: 2px;
                background: #808080;
            }
        }
        .local {
            color: #808080;
            margin: 0.5rem 0;
            align-self: center;
            span {
                color: black;
                font-weight: bold;
            }
        }
        h4 {
            color: #2558A3;
            font-weight: 400;
            align-self: center;
        }
        @media(min-width: 920px){
            width: 55%;
            justify-content: space-between;
            padding: 0 1rem;
            .time {
            display: flex;
            align-items: flex-end;
                span {
                    margin: 0 1rem 0.5rem 1rem;
                    width: 69px;
                }
            }
            .local {
                margin: 0.5rem 0;
                align-self: auto;
            }
            h4 {
                align-self: auto;
            }
        }
        
    }
    .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        color: #008A5D;
        .currency {
            font-size: clamp(16px,2vw,18px);
            font-weight: bold;
            span {
                font-size: 0.9rem;
                font-weight: bold;
            }
        }
        @media(min-width: 920px){
            width: 25%;
            justify-content: space-between;
            align-items: flex-end;
            padding: 0 1rem;
            .currency {

            }
        }     

        .tax {
            color: #808080;
            text-align: right;
        }
        button {
            padding: 0.2rem 1rem;
            background: #008A5D;
            font-size: clamp(16px,2vw,18px);
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

const StyleFavorite = styled.div`
    display: flex;
    flex-direction: column;
    p {
        margin: 0;
    }
    .local {
        p {
            margin-right: 1rem;
        }
    }
    .currency {
        margin-bottom: 1rem;
    }
    .btnContent {
        button {
            padding: 0.2rem 1rem;
            background: #008A5D;
            font-size: 1.2rem;
            color: white;
            border: 1px solid #008A5D;
            border-radius: 4px;
            transition: 0.5s ease;
            cursor: pointer;
            margin-right: 1rem;
            &:hover {
                color: #008A5D;
                background: white;
                transition: 0.5s ease;
            }
        }
    }
    .icon {
        font-size: 2rem;
        margin: 1rem 0;
    }
    .footer {
        flex-direction: column;
    }
`