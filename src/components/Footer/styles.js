import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px 0;
    border-top: 4px solid #A52A2A;

    img {
        width: 170px;
        cursor: pointer;
    }

    p {
        color: white;
        margin-top: 10px;
        font-size: 15px;
        font-weight: 200;
    }
`

export const Links = styled.ul`
        list-style-type: none;
        display: flex;
        position: relative;
        gap: 40px;

            li {
                width: 50px;
                height: 50px;

                background-color: #fff;
                box-shadow: 0 8px 25px #7a090963;
                border-radius: 60px;

                display: flex;
                align-items: center;
                justify-content: center;

                position: relative;
                transition: .2s;

                &:hover {
                    width: 180px;
                }
            }
            
            span {
                position: absolute;
            }

            .icon-center {
                margin-top: 5px;
                font-size: 30px;
            }

            .icon {
                color: #ccc;
                transition: .2s;
            }

            .text {
                color: #fff;
                font-size: 20px;
                transform: scale(0);
                transition: .2s;
                transition-delay: .1s;
            }

            li:hover .text {
                transform: scale(1);
            }

            li:hover .icon {
                transform: scale(0);
            }

            li::before {
                content: '';
                position: absolute;
                background-image: linear-gradient(45deg, var(--cor1), var(--cor2));
                inset: 0;
                opacity: 0;
                border-radius: 60px;
            }

            li:hover::before {
                opacity: 1;
            }
`