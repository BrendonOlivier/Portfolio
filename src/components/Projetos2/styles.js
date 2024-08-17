import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    padding: 50px 100px;
    background: transparent;

    h5 {
        text-align: center;
        font-size: 40px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #A52A2A;
        position: relative;

        &::after {
            content: '';
            height: 3px;
            width: 0;
            background-color: #fff;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
            animation: expand 3s infinite alternate;
        }

        
        @keyframes expand {  
            0% {  
                width: 0;  
            }  
            50% {  
                width: 80%;  
            }  
            100% {  
                width: 0;  
            }  
        }

        @media (max-width: 768px) {  
            font-size: 25px;
        }
    }

    .info {
        margin-top: 15px;
        color: #fff;

        @media (max-width: 768px) {  
            text-align: center;
        }
    }

    @media (max-width: 768px) {  
        padding: 50px 15px;
        background: transparent;
        padding-top: 20px;
        height: 100%;
    }
`

export const Projetos = styled.div`
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 768px) {  
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
    }

    .container-projects {
        background: white;
        border-radius: 20px;
        padding: 10px 20px;
        width: 350px;
        position: relative;
        box-shadow: 0 0 0 5px #A52A2A;

        .card {
            width: 100%;
            height: 170px;
            background-color: transparent;
            border-radius: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            perspective: 1000px;
            box-shadow: 0 0 0 5px #ffffff80;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card img {
            width: 100%;
            height: auto;
            fill: #333;
            border-radius: 10px;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
        }

        .card__content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            background-color: #f2f2f2;
            transform: rotateX(-90deg);
            transform-origin: bottom;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .card:hover .card__content {
            transform: rotateX(0deg);
        }

        .card__title {
            margin: 0;
            font-size: 24px;
            text-align: center;
            color: #A52A2A;
            font-weight: 700;
        }

        .card:hover img {
            scale: 0;
        }

        .card__description {
            margin: 10px 0 0;
            font-size: 14px;
            font-weight: bold;
            text-align: center;
            color: #000;
            line-height: 1.4;
        }
    }

    .buttons {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 50px;

        button {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 20px;
            padding: 10px 20px;
            border-radius: 10px;
            border: 2px solid #A52A2A
        }

        .btn-site {
            background: transparent;
            border: 3px solid #A52A2A;
            color: #000;
            transition: .4s ease-in-out;

            &:hover {
                background-color: #A52A2A;
                color: white;
                transform: scale(1.1);
            }
        }

        .btn-code {
            background: transparent;
            border: 3px solid #A52A2A;
            color: #000;
            transition: .4s ease-in-out;

            &:hover {
                background-color: #A52A2A;
                color: white;
                transform: scale(1.1);
            }
        }
    }
`