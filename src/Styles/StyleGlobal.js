import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url("../src/Assets/Images/pexels-helena-lopes.jpg");
        background-color: rgba(255, 255, 255, 0.5);
	    background-blend-mode: lighten;
        margin: 0;
        padding: 0;
    }

    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-basis: 100vw;
    }
`;
export default GlobalStyle;