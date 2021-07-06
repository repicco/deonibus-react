import {StyleFilterCard} from './style'
import { MdShoppingCart } from "react-icons/md";
import {useDispatch, useSelector} from 'react-redux'
import { useEffect, useState } from 'react'
import { GiBus } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";
import Modal from '../Modal'
import { ImHappy } from "react-icons/im";



export default function CarShop(){
    const dispatch = useDispatch()
    const state = useSelector(state => state.trips)
    const [carShop, setCarShop] = useState([])
    const [completShop, setCompletShop] = useState()
    const [finish, setFinish] = useState()

    useEffect(() => {
       const trips = state.carShop.filter(item => item.carShop === true) 

       setCarShop({...carShop, trips})
    }, [state, setCarShop])

    function handleCompletShop(value){
        setCompletShop(value)
    }

    function handleFinish(){
        setFinish(false)
    }

    function finishShop(){
        setCompletShop(false)
        setFinish(true)
    }
    
    return(
        <StyleFilterCard>
                <div className="title">
                    <MdShoppingCart className="icon" />
                    <p>Carrinho</p>
                </div>
                {
                    carShop.trips?.length > 0 ?
                    carShop.trips.map(trip => {
                        return (
                            <div className="trip" key={trip.objectId}>
                                <div>
                                    <p>De: <span className="data">{trip.Origin}</span></p>
                                    <p>Para: <span className="data">{trip.Destination}</span></p>
                                </div>
                                <div>
                                    <p>Parte: <span className="data">{trip.departureTime}</span></p>
                                    <div>
                                        <GiBus className="icon" />
                                        <BsArrowRight className="icon" />
                                    </div>
                                    <p>Chega: <span className="data">{trip.arrivalTime}</span></p>
                                </div>
                                <div>
                                    <p>Empresa: <span className="data">{trip.Company.Name}</span></p>
                                    <p className="data">{trip.priceMoney}</p> 
                                </div>                         
                            </div>
                        )   
                    })
                    :
                    <div className="content">
                        Sem passagens ainda...
                    </div>           
                }
                {
                    carShop.trips?.length > 0 &&
                    <button className="content" onClick={() => setCompletShop(true)}>
                        <p>COMPRAR</p>
                    </button>
                }
                <Modal visible={completShop} title={'Finalizando as compras!'} setVisible={handleCompletShop}>
                    {
                    carShop.trips?.length > 0 &&
                    carShop.trips.map(trip => {
                        return (
                            <div className="tripBuy" key={trip.objectId}>
                                <div className="box">
                                    <div>
                                        <p>De: <span className="data">{trip.Origin}</span></p>
                                        <p className="time">Parte: <span className="data">{trip.departureTime}</span></p>
                                    </div>
                                    <div>                                    
                                        <p>Para: <span className="data">{trip.Destination}</span></p>
                                        <p className="time">Chega: <span className="data">{trip.arrivalTime}</span></p>
                                    </div>
                                    <div>
                                        <p>Empresa: <span className="data">{trip.Company.Name}</span></p>
                                        <p className="money">{trip.priceMoney}</p> 
                                    </div>
                                </div>                                                       
                            </div>
                        )   
                    })
                    }
                    <div className="btnContent">
                        <button onClick={() => handleCompletShop(false)}>Cancelar</button>
                        <button onClick={finishShop}>Concluir</button>
                    </div>
                </Modal>
                <Modal visible={finish} title={'Compras Concluidas!'} setVisible={handleFinish}>
                    <div className="finish">
                        <p>
                            Seu pedido é: <span class="fontSuccess">00280911</span>
                        </p> 
                        <p>Agradecemos a preferência!</p> 
                    </div>                   
                    <div className="finishIcon">
                        <ImHappy className="icon" />
                    </div>
                    <div className="btnContent">
                        <button onClick={handleFinish}>OK</button>
                    </div> 
                </Modal>
            </StyleFilterCard>
    )
}