import {StyleFilterCard} from './style'
import { MdShoppingCart } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import {handleTrips} from '../../store/actions'
import { useState } from 'react'

export default function CarShop(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips)
    const [carShop, setCarShop] = useState([])

    console.log('carShop',state.carShop.map)

    return(
        <StyleFilterCard>
                <div className="title">
                    <MdShoppingCart className="icon" />
                    <p>Carrinho</p>
                </div>
                <div className="clear">
                    limpar
                </div>
                {
                 state.carShop.map(item => (
                    item.carShop && <div>{item}</div>
                 ))   
                }
                <div className="content">
                    <p>Finalizar</p>
                </div>
            </StyleFilterCard>
    )
}