import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips} from '../../../store/actions'
import { useState } from 'react';

export default function Options() {
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips) 
    let objOptions = [
        {
            name: 'mais cedo',
            enable: false,
            change: 'time',
        },
        {
            name: 'mais tarde',
            enable: false,
            change: 'time',
        },
        {
            name: 'menor preço',
            enable: false,
            change: 'price',
        },
        {
            name: 'maior preço',
            enable: false,
            change: 'price',
        },
    ]
    const [options, setOptions] = useState(objOptions)
    
    function handleOptions(check, handle, change){
        let payload = []

        objOptions.forEach(el => {
            if(el.name === check){
                handle ? el.enable = true : el.enable = false
            }
        })

        setOptions(objOptions)

        if(handle) {
            const trips = state.trips
            if(change === 'price') {
                const prices = trips.map( el => {
                    return el.Price
                 })
     
                 if(check === 'maior preço') prices.sort((a, b) => {return b - a})
                 if(check === 'menor preço') prices.sort((a, b) => {return b - a}).reverse()
     
                 prices.forEach(price => {
                     trips.forEach(trip => {
                         if(trip.Price === price) {
                             payload.push(trip)
                         }
                     })
                 })
            }
            if(change === 'time') {
                const times = trips.map( el => {
                    return +el.departureTime.replace(':', '')
                })

                if(check === 'mais tarde') times.sort((a, b) => {return b - a})
                if(check === 'mais cedo') times.sort((a, b) => {return b - a}).reverse()

                times.forEach(time => {
                    trips.forEach(trip => {
                        const tripTime = +trip.departureTime.replace(':', '')
                        if(tripTime === time) {
                            payload.push(trip)
                        }
                    })
                })
            }
                        
            payload = payload.filter((el, index) => payload.indexOf(el) === index)
        } else {
            payload = state.tripsOriginal
        }

        dispatch(handleTrips(payload))
    }

    return(
        <StyleOptions>
            <div className="lineTop"></div>
            <h3>IDA</h3>
            <p>seg, 06 de Setembro de 2019</p>
            <div className="location">
                <MdLocationOn className="icon"/>
                <div>
                    <p>Passagem de ônibus de São Paulo - SP para Rio de Janeiro - RJ</p>
                    <p>Horários de ônibus e preços de passagens</p>
                </div>
            </div>
            <div className="selection">
                {
                    options.map( item => (
                        <section key={item.name}>
                            {item.enable
                                ?
                                <div className="active" onClick={() => handleOptions(item.name, false, item.change)}>{item.name}<span></span></div>
                                :
                                <div onClick={() => handleOptions(item.name, true, item.change)}>{item.name} <span></span></div>
                            }
                            
                        </section>
                    ))
                }
            </div>
        </StyleOptions>
    )
}

const StyleOptions = styled.section`
    background: white;
    text-align: center; 
    .lineTop {
        background: #008A5D;
        height: 3px;
    }
    h3 {
        margin-top: 0.5rem;
        color: #008A5D;
    }
    .location {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem 0;
        p {
            color: black;
            :last-child {
                color: #808080;
            }
        }
        .icon {
            margin: 0 1rem;
            font-size: 3rem;
            color: #008A5D;
        }
        @media(min-width: 920px){
            text-align: left;
            display: flex;
            flex-direction: row;
        }
    }
    .selection {
        display: flex;
        width: 100%;
        section {
            width: 33%;
            cursor: pointer;
            border-bottom: 3px solid transparent;
            div {
                width: 100%;
                height: 100%;
                padding: 0.5rem;
            }
            &:hover {
                border-bottom: 3px solid #008A5D;
            }
        }
        .active {
           background: #008A5D;
           border-radius: 4px;
           color: white;
        }
    }
    
`