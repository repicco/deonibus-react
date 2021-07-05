import styled from 'styled-components'
import { GiBus } from "react-icons/gi";
import { useEffect, useState } from 'react';

export default function Modal({visible, setVisible, title, children}){
    const [handleModal, setHandleModal] = useState(false)

    useEffect(() => {
        openModal()
        closeModal()
    }, [visible])

    function openModal(){
        if(visible){
            setHandleModal(true)
        }
    }

    function closeModal(force){
        if(force) setVisible(false)
        if(!visible) setHandleModal(visible)
    }

    if(handleModal) {
        return(
            <StyleModal>
                <div className="backModal" onClick={() => closeModal(true)}></div>
                <section>
                    <div>
                        <GiBus className="icon" />
                        <h2>{title}</h2>
                    </div>
                        {children}
                </section>
            </StyleModal>
        )
    } else {
        return(
            <>
            </>
        )
    }

}

const StyleModal = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
    .backModal {
        position: fixed;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        background: rgba(117, 125, 138, 0.2);
        cursor: not-allowed;
    }
    section {
        z-index: 99;
        color: #008A5D;
        margin: 2rem 3rem;
        border-radius: 8px;
        background: white;
        padding: 1rem;
        box-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
        div {
            display: flex;
            align-items: center;
            .icon {
                font-size: 2rem;
                margin-right: 1rem;
            }
        }
        p {
            margin-top: 1rem;
            color: black;
        }
    }
`