import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        font-family: "Montserrat", sans-serif;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        overflow-x: hidden;
        width: 100vw;
        height: 100%;
    }

    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background-color: #CCCCCC;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #A52A2A;
        border-radius: 10px;
        cursor: grab;
    }

    button, a {
        cursor: pointer;
    }
`;

export default globalStyles;