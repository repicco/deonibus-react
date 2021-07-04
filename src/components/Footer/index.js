import styled from "styled-components"

export default function Footer(){
    return (
        <StyleFooter className="deo__footer"></StyleFooter>
    )
}

const StyleFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 2rem;
    width: 100%;
    background-color: #363636;
`