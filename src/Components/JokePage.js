import styled from 'styled-components'
import {appear} from "../Styles/StyledVariables"
import GlobalStyle from "../Styles/StyleGlobal"
import Weather from "./Weather"
import Joke from "./Joke"

export const StyledMain = styled.main`
    height: 100vh;
    background-image: url("./src/Assets/Images/pexels-helena-lopes.jpg");
    background-color: rgba(255, 255, 255, 0.5);
    background-blend-mode: lighten;
    padding: 0;
    -webkit-animation: ${appear} 1s both;
    animation: ${appear} 1s both;
    @media screen and (max-width:790px){
        height: 100vh;
        overflow-y: auto;
    }
`;

export default () => {
    return ( 
        <StyledMain>
            <GlobalStyle />
            <Weather />
            <Joke />
        </StyledMain>
    );
};
