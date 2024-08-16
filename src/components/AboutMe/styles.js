import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 110vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 100px;
    box-shadow: 0 0 40px 3px #ffffff1f;
    background: transparent;

    .caixa-img {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;

        img {
            width: 270px;
            height: 250px;
            border: 9px groove #A52A2A;
            border-radius: 50%;
            filter: contrast(150%);
            -webkit-box-shadow: 10px 0px 58px 0px rgba(165,42,42,1);
            -moz-box-shadow: 10px 0px 58px 0px rgba(165,42,42,1);
            box-shadow: 10px 0px 58px 0px rgba(165,42,42,1);
        }

        h3 {
            font-size: 30px;
            font-weight: bold;
            color: #A52A2A;
            border-bottom: 2px solid #fff;
            padding-bottom: 5px;
        }
    }

    @media (max-width: 768px) {  
        padding: 0 0;
        justify-content: center;
        height: 130vh;
    }
`

export const Info = styled.div`
    padding: 30px 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    h4 {
        font-size: 25px;
        line-height: 35px;
        color: white;
        text-align: center;

        span {
            color: #A52A2A;
        }

        @media (max-width: 768px) {  
            font-size: 20px;
        }
    }

    @media (max-width: 768px) {  
        padding: 0 15px;
    }
`

export const Button = styled.button`
        --😀: #A52A2A;
        --😀😀: #8B0000;
        --😀😀😀: #8B0000;
        cursor: pointer;
        width: 184px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        font-size: 20px;
        font-weight: 800;
        color: #fff;
        background: var(--😀);
        border: 2px solid var(--😀😀);
        border-radius: .75rem;
        box-shadow: 0 8px 0 var(--😀😀);
        transform: skew(-10deg);
        transition: all .1s ease;
        filter: drop-shadow(0 15px 20px var(--😀😀😀));
        opacity: 1;

    &:hover {
        opacity: .7;
    }

    &:active {
        letter-spacing: 0px;
        transform: skew(-10deg) translateY(8px);
        box-shadow: 0 0 0 var(--😀😀😀);
        opacity: .5;
    }
`