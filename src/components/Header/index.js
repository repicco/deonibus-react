import styled from 'styled-components'

export default function Header(){
    return (
        <StyleHeader>
            <h2>
                deônibus
            </h2>
            <div></div>
        </StyleHeader>
    )
}

const StyleHeader = styled.header`
    h2 {
        color: #ed1941;
        font-weight: bold;
        margin: 0.5rem 1rem;
    }
    div {
        height: 2rem;
        width: 100%;
        background-color: #ed1941;
    }
`
