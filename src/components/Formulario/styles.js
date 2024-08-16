import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: #E6E6FA;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px 0;
    
    @media (max-width: 768px) {  
        height: 100%;
    }

    h4 {
        text-align: center;
        font-size: 40px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #A52A2A;
        position: relative;

        @media (max-width: 768px) {  
            font-size: 25px;
        }

        &::after {
            content: '';
            height: 3px;
            width: 0;
            background-color: #000;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            animation: expand 3s infinite alternate; 
        }
    }

    @keyframes expand {  
        0% {  
            width: 0;  
        }  
        50% {  
            width: 50%;  
        }  
        100% {  
            width: 0;  
        }  
    }
`

export const MainContatos = styled.div`
    display: flex;
    gap: 150px;
    margin: 40px 0 10px 0;

    @media (max-width: 768px) {  
        flex-direction: column;
        gap: 35px;
        align-items: center;
        justify-content: center;
    }
`

export const Contatos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 20px;
    gap: 15px;
    border-radius: 10px;
    background: rgba(128, 128, 128, 0.2);
    border: 3px solid #A52A2A;

    @media (max-width: 768px) {  
        padding: 10px;
        width: 95vw;
    }

    h5 {
        font-size: 20px;
        font-weight: 600;
        color: #A52A2A;
        padding-bottom: 3px;
    }

    .cont-contato {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: red;
        margin: 0 20px;
        color: white;
        padding: 10px;
        border-radius: 10px;
        width: 100%;
        background: transparent;
        border: 3px solid #fff;

        p {
            color: #000;
            font-weight: 600;
        }
        

        .icon {
            font-size: 30px;
            color: #000;
        }

        .name-contato {
            font-weight: bold;
            margin: 5px 0;
            color: #000;
        }

        .redes {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
            gap: 15px;
            color: #000;

            .icon2 {
                font-size: 22px;
                cursor: pointer;
                transition: .4s ease-in-out;
                color: #000;

                &:hover {
                    transform: translateX(10px);
                }
            }
        }
    }
`

export const Formulario = styled.div`
    background: red;
    padding: 20px 20px;
    border-radius: 10px;
    background: rgba(128, 128, 128, 0.2);
    border: 3px solid #A52A2A;

    @media (max-width: 768px) {  
        padding: 10px;
        width: 95vw;
    }

    h5 {
        font-size: 20px;
        font-weight: 600;
        color: #A52A2A;
        padding-bottom: 3px;
        text-align: center;
    }

    .cont-inputs {
        display: flex;
        flex-direction: column;

        label {
            font-size: 14px;
            font-weight: 600;
            margin: 15px 0 8px 0;
        }

        input {
            height: 40px;
            width: 400px;
            border-radius: 5px;
            padding-left: 20px;
            border: 2px solid #fff;
            background: transparent;
            font-weight: bold;

            @media (max-width: 768px) {  
                width: 100%;
            }
        }
        
        .mensagem-texto {
            resize: none;
            height: 200px;
            padding: 10px;
            font-size: 15px;
            font-weight: 500;
            background: transparent;
            border-radius: 5px;
            border: 2px solid #fff;
        }
    }

    .Btn {
        width: 180px;
        height: 50px;
        margin: 10px 0;
        border: none;
        border-radius: 10px;
        background: linear-gradient(to right,#A52A2A,#FF4500,#A52A2A,#A52A2A,#FF4500,#A52A2A);
        background-size: 250%;
        background-position: left;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition-duration: 1s;
        overflow: hidden;
        font-size: 15px;
        font-weight: 600;
        color: #fff;
    }

    .Btn::before {
        position: absolute;
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        width: 97%;
        height: 90%;
        border-radius: 8px;
        transition-duration: 1s;
        background-color: rgba(128, 128, 128, 0.2);
        background-size: 200%;
    }

    .Btn:hover {
        background-position: right;
        transition-duration: 1s;
    }

    .Btn:hover::before {
        background-position: right;
        transition-duration: 1s;
    }

    .Btn:active {
        transform: scale(0.95);
    }
`