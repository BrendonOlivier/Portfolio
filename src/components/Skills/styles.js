import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 50vh;
    background: #E6E6FA;
    padding: 0 100px;
    border-top: 2px solid #A52A2A;
    border-bottom: 2px solid #A52A2A;
    box-shadow: 0 0 40px 3px #ffffff1f;

    @media (max-width: 768px) {  
        padding: 0 0;
    }
`

export const Info = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 50px 0;

    h4 {
        font-size: 40px;
        color: #A52A2A;
        position: relative;
        letter-spacing: 10px;
        text-transform: uppercase;

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

        @media (max-width: 768px) {  
            font-size: 30px;
        }
    }

    @keyframes expand {  
        0% {  
            width: 0;  
        }  
        50% {  
            width: 100%;  
        }  
        100% {  
            width: 0;  
        }  
    }

    p {
        font-size: 15px;
        font-weight: bold;
        padding-top: 8px;
    }
`

export const Habil = styled.div`
    position: relative;  
    overflow: hidden;  
    width: 100%;
    height: 100px; 
    
    @media (max-width: 768px) {  
        height: 100%;
    }
`

export const HardSkills = styled.div`
     display: flex;
     width: 100%;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     position: absolute;
     cursor: no-drop;
     

    .carrossel {
        display: flex;
    }

    div { 
        gap: 15px;
    } 
   
    img {  
        width: 60px;  
        height: 60px;
        margin-bottom: 10px;
    }  

    p {  
        font-size: 14px; 
        font-weight: bold;
        color: #A52A2A;
        border-bottom: 2px solid #000;
        padding-bottom: 3px;
    }
`

export const BackEnd = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    gap: 50px;

    img {
        width: 50px;
        height: 50px;
    }
`