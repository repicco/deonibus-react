import styled from 'styled-components'

export const StyleFilterCard = styled.div`
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
        margin: 1rem 0;
    }
    .iconCheck {
            font-size: 1.5rem;
        }
    .iconCheck.active {
        color: #008A5D;
    }
    .alert {
            color: #ed1941;
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