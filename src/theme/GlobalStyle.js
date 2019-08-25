import { createGlobalStyle } from 'styled-components';

require('typeface-montserrat');

const GlobalStyle = createGlobalStyle`


    *,*:before, *:after{
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; /*Happy Rems*/
    }

    body{
        padding:0;
        margin:0;
        font-size: 1.6rem;
        font-family: "Montserrat", sans-serif;
    }

`;

export default GlobalStyle;
