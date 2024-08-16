import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    background: #E6E6FA;
    border-top: 2px solid #A52A2A;
    border-bottom: 2px solid #A52A2A;

    h3 {
        text-align: center;
        font-size: 40px;
        letter-spacing: 10px;
        text-transform: uppercase;
        color: #A52A2A;
        position: relative;

        @media (max-width: 768px) {  
            font-size: 30px;
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

    .cliqueInImage {
        color: #000;
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        margin-top: 30px;
    }

    .boxImages {
        padding-top: 50px;
        width: 100%;
        display: flex;
        height: 100%;
        gap: 5px;
    }  
    
    .projectImgs {
        border: 5px solid rgb(255, 0, 0);
        border-radius: 20px;
        filter: grayscale(100%);
        width: 100px;
        height: 400px;
        object-fit: cover;
        border-radius: 10px;
        transition: all ease-out 0.5s;
        cursor: pointer;

        &:hover {
            width: 900px;
            filter: grayscale(0%);
            box-shadow: 0 0 70px #ff0000, inset 0 0 80px #ff0000;
        }
    }

    @media (max-width: 768px) {  
        padding: 20px 15px;
        display: grid;
        height: 170vh;
        
        .boxImages {  
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            width: 95vw;
        }  

        .projectImgs {  
            width: 100%; 
            height: auto; 
            transition: transform 0.5s ease;
            filter: grayscale(0);
            
            &:hover {  
                display: none;
            }  
        }  
    } 
`