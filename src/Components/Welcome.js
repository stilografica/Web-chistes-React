import styled from "styled-components"
import {keyframes} from 'styled-components'
import GlobalStyle from "../Styles/StyleGlobal"
import {Button, Header, Subtitle} from "../Styles/StyledArticle"
import {color, font} from "../Styles/StyledVariables"

 export const start = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`;

export const StyledDiv = styled.div`
    background-image: url("../../src/Assets/Images/joker.jpg");
    background-size: cover;
    height: 100vh;
    padding-left: 15rem;
    p {
        ${font};
        font-size: 1.2rem;
        color: ${color.white};
        text-transform: uppercase;
        opacity: 0;
        -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.3s forwards; 
        animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.3s forwards;     
        &::selection {
            background-color: ${color.aqua};
            color: ${color.white};
        }
    }
    @media screen and (max-width:790px){
        padding-left: 1rem;
    }
`;

export const Image = styled.img`
    max-width: 25rem;
    opacity: 0;
    -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1s forwards; 
    animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1s forwards;     
`;

export default (props) => {
    return (
        <StyledDiv>
            <GlobalStyle />
            <Image src="../../src/Assets/Images/El_Club_de_la_Comedia.svg" />
            <p>Presents...</p>
            <Header>THE JOKER</Header>
            <Subtitle>La nova secció molona d’acudits en anglès per morir-se de riure, of course!</Subtitle>
            <Button onClick={() => props.handleEvent(true)}>¿Comencem?</Button>
        </StyledDiv>
    );
};
