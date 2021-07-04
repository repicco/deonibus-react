import styled from "styled-components";
import { MdSchedule, MdCheckBox } from "react-icons/md";

import Favorites from './Favorites'
import Classes from './Classes'
import Price from "./Price";
import CarShop from './CarShop'

export default function Filter(){
    return(
        <>
            <StyleFilterHeader> 
                <div className="title">
                    Filtro <span>*</span>
                </div>
                <div className="clear">
                    limpar tudo
                </div>
            </StyleFilterHeader>
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
                <div className="content">
                    <p>Madrugada (00h:00 - 5h:59)</p>
                    <MdCheckBox className="iconCheck active"/>
                </div>
                <div className="content">
                    <p>Manhã (06h:00 - 11:59)</p>
                    <MdCheckBox className="iconCheck active"/>
                </div>
                <div className="content">
                    <p>Tarde (12h:00 - 17:59)</p>
                    <MdCheckBox className="iconCheck active"/>
                </div>
                <div className="content">
                    <p>Noite (18h:00 - 23:59)</p>
                    <MdCheckBox className="iconCheck active"/>
                </div>   
            </StyleFilterCard>
            <Classes/>
            <Price/>
            <Favorites />
            <CarShop/>
        </>
    )
}

const StyleFilterHeader = styled.div`
    position: relative;
    .title {
        margin-bottom: 1rem;
        span {
            color: #008A5D;
        }
    }
    .clear {
        font-size: 0.9rem;
        color: #2558A3;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        cursor: pointer;
    }
`

const StyleFilterCard = styled.div`
    position: relative;
    background: white;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem 1rem 1rem;

    .title {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        .icon {
            font-size: 2rem;
            margin-right: 1rem;
        }
    }
    .clear {
        font-size: 0.9rem;
        color: #2558A3;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        cursor: pointer;
    }
    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        .iconCheck {
            font-size: 1.5rem;
        }
        .iconCheck.active {
            color: #008A5D;
        }
    }
    .location {
        margin-left: 3rem;
        display: flex;
        align-items: center;
        .next {
            font-size: 1.5rem;
        }
        .next.one {
            opacity: 0.2;
        }
        .next.two {
            opacity: 0.3;
        }
        .next.three {
            opacity: 0.4;
        }
        .next.three {
            opacity: 0.5;
        }
    }
    .time {
        div {
            display: flex;
            justify-content: center;
            h2 {
                margin: 0.5rem;
                padding: 0.5rem 1rem;
                background: #ddd;
                border-radius: 8px;
            }
        }
    }
`