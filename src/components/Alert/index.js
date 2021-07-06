import styled from 'styled-components'
import { FiAlertCircle } from "react-icons/fi";
import { useEffect, useState } from 'react';

export default function Alert({visible}){
    const [handleModal, setHandleModal] = useState(false)

    useEffect(() => {
        openModal()
        closeModal('firstOpen')
    }, [visible])

    function openModal(){
        if(visible){
            setHandleModal(true)
        }
    }

    function closeModal(handle){
        handle === 'firstOpen' ? setTimeout(() => setHandleModal(false), 3000) : setHandleModal(false)
    }

    if(handleModal) {
        return(
            <StyleAlert onClick={closeModal}>
                <section>
                    <div>
                        <FiAlertCircle className="icon" />
                        <h3>Alert</h3>
                    </div>
                    <p>Sem resultado para pesquisa</p>
                </section>
            </StyleAlert>
        )
    } else {
        return(
            <>
            </>
        )
    }

}



const StyleAlert = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    color: orange;
    display: flex;
    justify-content: flex-end;
    z-index: 99;
    cursor: pointer;
    section {
        margin: 2rem 0 2rem;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        background: #FFEFD5;
        box-shadow: 1px 1px 1px 1px black;
        padding: 1rem;
        height: 100px;
        div {
            display: flex;
            align-items: center;
            .icon {
                font-size: 1.5rem;
                margin-right: 1rem;
            }
        }
        p {
            margin-top: 1rem;
            color: black;
        }
    }
`