import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: ${props => props.changeBackground ? '70px' : '100px'};
    padding: 10px 100px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: space-around   ;
    border-bottom: 5px solid #A52A2A;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    transition: .4s ease-in-out;

    @media (max-width: 768px) {  
        height: ${props => props.changeBackground ? '50px' : '65px'};
        padding: 10px 0;
        align-items: center;
    }
`

export const ContLogo = styled.div`
   img {
        cursor: pointer;
        width: 200px;

        @media (max-width: 768px) {  
            width: 130px;
        }
   }
`

export const ContLinks = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 768px) {  
        display: ${props => (props.menuVisible ? 'flex' : 'none')}; 
        flex-direction: column;  
        position: absolute;  
        top: 100%;
        left: 0;  
        background-color: #000;
        width: 100%;
        height: 100vh;
        padding: 50px;

        opacity: ${props => props.menuVisible ? '1' : '0'};
        pointer-events: ${props => props.menuVisible ? 'auto' : 'none'};
        transition: .5s;
        transform: ${props => props.menuVisible ? 'translateY(0)' : 'translateY(100px)'};
    }

    li {
        list-style: none;
        color: #fff;
        font-size: 20px;
        position: relative;

        &::after {
            content: '';
            height: 3px;
            width: 0;
            background-color: #A52A2A;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.3s ease-in-out;  
        }

        &:hover::after {
            width: 100%;
        }
    }

    .Btn {
        width: 140px;
        height: 40px;
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
        color: #fff;
        font-size: 15px;
        font-weight: 600;
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

export const MenuToggle = styled.div`  
    display: none;  

    @media (max-width: 768px) {  
        display: block; 
    }

    @media (max-width: 768px) {  
        cursor: pointer;  
        font-size: 24px; 
        color: #fff;
    } 
`;

export const Language = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;

    p {
        font-size: 10px;
        color: white;
    }

    .cont-language {
        display: flex;
        gap: 14px;

        img {
            width: 25px;
            cursor: pointer;
        }
    }

`