import styled from "styled-components"
import GlobalStyle from "./Styles/StyleGlobal"
import Weather from "./Components/Weather"
import Joke from "./Components/Joke"
import Welcome from "./Components/Welcome"
import {keyframes} from 'styled-components'
import {useState} from "react"

export const appear = keyframes`
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: none;
    }
`;

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
    const [isVisible, setIsVisible] = useState(false);
    if (!isVisible) return <Welcome handleEvent={setIsVisible} />;
    return ( 
        <StyledMain>
            <GlobalStyle />
            <Weather />
            <Joke />
        </StyledMain>);
};
