import styled from 'styled-components'

export default function Links(){
    return (
        <StyleLinks>
            <a href="/">Início</a>
            <span>&#62;</span>
            <a href="/">Página Anterior</a>
            <span>&#62;</span>
            <a href="/">Página Atual</a>
        </StyleLinks>
    )   
}

const StyleLinks = styled.nav`
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        color: #2558a3;
    }
    span {
        font-size: 2.5rem;
        font-style: italic;
        margin: 0 0.5rem;
    }
    a:last-child {
        color: black;
    }
`