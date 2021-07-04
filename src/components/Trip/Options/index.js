import styled from 'styled-components'
import { MdLocationOn } from "react-icons/md";

export default function Options() {
    return(
        <StyleOptions>
            <div className="lineTop"></div>
            <h3>IDA</h3>
            <p>seg, 27 de jan 2020</p>
            <div className="location">
                <MdLocationOn className="icon"/>
                <div>
                    <p>Passagem de ônibus de São Paulo - SP para Rio de Janeiro - RJ</p>
                    <p>Horários de ônibus e preços de passagens</p>
                </div>
            </div>
            <div className="selection">
                <div>mais cedo <span></span></div>
                <div>mais tarde <span></span></div>
                <div>menor preço <span></span></div>
                <div>maior preço <span></span></div>
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
        text-align: left;
        display: flex;
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
        /* .icon {
            padding: 0 1rem;
            font-size: 1.5rem;
            color: #008A5D;
        } */
    }
    .selection {
        display: flex;
        width: 100%;
        div {
            width: 33%;
            cursor: pointer;
            padding: 1rem;
            border-bottom: 3px solid transparent;
            &:hover {
                border-bottom: 3px solid #008A5D;
            }
        }
    }
`