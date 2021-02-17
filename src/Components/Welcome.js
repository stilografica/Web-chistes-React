import styled from "styled-components"
import GlobalStyle from "../Styles/StyleGlobal"
import {Button, Header, Subtitle} from "../Styles/StyledArticle"
import {color, font, selection, animation} from "../Styles/StyledVariables"
import {Link} from "react-router-dom";

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
        ${animation(i=1.3)}  
        &::selection {
            ${selection};
        }
    }
    @media screen and (max-width:790px){
        padding-left: 1rem;
    }
`;
//Variable declared to pass time delay "animation"
let i;
export const Image = styled.img`
    max-width: 25rem;
    opacity: 0;
    ${animation(i=1)}   
`;

export default () => {
    return (
        <StyledDiv>
            <GlobalStyle />
            <Image src="../../src/Assets/Images/El_Club_de_la_Comedia.svg" />
            <p>Presents...</p>
            <Header>THE JOKER</Header>
            <Subtitle>La nova secció molona d’acudits en anglès per morir-se de riure, of course!</Subtitle>
            <Link to="/JokePage">
                <Button>¿Comencem?</Button>
            </Link>
        </StyledDiv>
    );
};
