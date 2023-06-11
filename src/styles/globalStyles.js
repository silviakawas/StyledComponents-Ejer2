import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    body {
        font-family: sans-serif;
        background-color: ${props =>(props.active ? '#20222F' : '#FFFFFF')};
    }
    .container{
        width: 1440px;
        margin: auto;
    }
    .containerCards{
        width: 1440px;
        display: flex;
        flex-direction: row;
        gap: 60px;
        align-items: center;
        justify-content: center;
    }

`;

export {GlobalStyles};