import styled from "styled-components";
import Backgrund from './assets/BG.jpg'

export const Container = styled.div`
    width: 100vw;
    max-width: 100vw;
    height: 100%;
    margin-top: 100px;
    
    .bg {
        background: url(${Backgrund});
        background-position: center;
        background-size: cover;
        width: 100vw;
        max-width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
    }

    .icon-topo {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #A52A2A;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 2px solid #000;
        cursor: pointer;
        z-index: 3;
        font-size: 20px;
        opacity: 1;

        &:hover {
            opacity: .6;
        }

        @media (max-width: 768px) {  
            bottom: 10px;
            right: 10px;
            width: 30px;
            height: 30px;
        }
    }
`

export const ContainerMain = styled.div`
    width: 100vw;
    height: calc(100vh - 100px);
    padding: 30px 100px;
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding: 30px 15px;
        gap: 20px;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 100vh;
    line-height: 45px;

    h2 {
        color: white;
        font-size: 25px;

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

    h1 {
        color: #A52A2A;
        font-size: 35px;
        font-weight: bold;
        text-transform: uppercase;

        @media (max-width: 768px) {
            font-size: 25px;
        }
    }

    p {
        color: white;
        font-size: 20px;
        line-height: 25px;
        margin-top: 15px;

        span {
            font-weight: bold;
            color: #A52A2A;
            padding-bottom: 2px;
            border-bottom: 2px solid #fff;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        text-align: center;
    }
`

export const Perfil = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        position: relative;
        width: 300px;
        height: 350px;
        margin-bottom: 80px;
        clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%);
        animation: flutuar 2s ease-in-out infinite alternate;
        filter: contrast(130%)
    }

    @keyframes flutuar {
        0% {
            top: 0;
        }

        100% {
            top: 30px;
        }
    }

    @media (max-width: 768px) {
        width: 100%;

        img {
            width: 150px;
            height: 200px;
            margin-bottom: 0;
        }

        @keyframes flutuar {
        0% {
            top: 0;
        }

        100% {
            top: 15px;
        }
    }
    }
`

export const Button = styled.button`
    width: 10em;
    position: relative;
    margin-top: 30px;
    height: 3.5em;
    border: 3px ridge #A52A2A;
    outline: none;
    background-color: transparent;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;


    &:after {
        content: "";
        position: absolute;
        top: -10px;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: #0D0D0D;
        transition: 0.5s;
        transform-origin: center;
    }

    &:before {
        content: "";
        transform-origin: center;
        position: absolute;
        top: 80%;
        left: 3%;
        width: 95%;
        height: 40%;
        background-color: #0D0D0D;
        transition: 0.5s;
    }

    &:hover::before, &:hover::after {
        transform: scale(0)
    }

    &:hover {
        box-shadow: inset 0px 0px 25px #A52A2A;
    }
`