import styled from 'styled-components'

export const StyleFilterCard = styled.div`
    position: relative;
    background: white;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem 1rem 1rem;
    .fontSuccess {
        color: #008A5D
    }
    .title {
        display: flex;
        align-items: center;
        font-size: clamp(16px, 2vw, 20px);
        .icon {
            font-size: clamp(24px, 2vw, 32px);
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
        margin: 1rem 0;
    }
    .iconCheck {
        font-size: clamp(18px, 2vw, 24px);
        }
    .iconCheck.active {
        color: #008A5D;
    }
    .location {
        margin-left: 3rem;
        display: flex;
        align-items: center;
        .next {
            font-size: clamp(18px, 2vw, 24px);
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
    .trip {
        margin: 0.5rem 0;
        padding: 1rem 0.5rem;
        box-shadow: 0 2px 2px rgba(0, 138, 93, 0.5);
        border-radius: 8px;
        div {
            display: flex;
            justify-content: space-between;
            font-size: clamp(11px, 2vw, 14px);
            .data {
                color: #008A5D;
                font-weight: bold;
            }
            .icon {
                font-size: 1.8rem;
                color: #aaa;
            }
        }
    }
    .tripBuy {
        display: flex;
        flex-direction: column;
        p {
            margin: 0;
        }
        .box {
            box-shadow: 0 2px 0 #008A5D;
        }
        div {
            display: flex;
            margin: 0.5rem 0.5rem;
            .data {
                color: #008A5D;
            }
            .time {
                margin: 0 0.5rem;
                padding: 0 0.5rem;
                background: #ddd;
                border-radius: 4px;
            }
            .money {
                margin: 0 0.5rem;
                padding: 0 0.5rem;
                background: #008A5D;
                border-radius: 4px;
                color: white;
            }
        }
    }
    .btnContent {
        width: 100%;
        margin-top: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: center; 
    }
    button {
        padding: 0.2rem 0.5rem;
        background: #008A5D;
        font-size: 1rem;
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
    .finish {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .finishIcon {
        margin: 1rem 0;
        width: 100%;
        display: flex;
        justify-content: center;
        .icon {
            color: #008A5D;
            font-size: 6rem;
            margin-left: 1rem;
        }  
    }
`