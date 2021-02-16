import styled from "styled-components"
import {color, font} from "./StyledVariables"
import {start} from "../Components/Welcome"

export const StyledArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 85vh;
    width: 100vw;
	section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-color: ${color.white};
        width: 45%;
        min-height: 30rem;
        box-shadow: 
            0 4px 8px rgba(0,0,0,0.08), 
            0 8px 16px rgba(0,0,0,0.08);
        border-radius: 25px;
        padding: 2rem 6rem 2rem 6rem;
        p {
            ${font}
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.8rem;
            padding: 2rem 0 2rem 0;
            margin: 0;
            &::selection {
                background-color: ${color.aqua};
                color: ${color.white};
            }
        }
        @media screen and (max-width:790px){
            margin: auto;
        }
    }
`; 

export const H1 = styled.h1`
    justify-self: flex-start;
    ${font}
    font-size: 2.5rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    opacity: 0;
    -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.2s forwards; 
    animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.2s forwards;     
    &::selection {
        background-color: ${color.aqua};
        color: ${color.white};
    }
`;

export const Header = styled(H1)`
    ${font};
    text-align: left;
    color: ${color.aqua};
`;

export const Subtitle = styled.h2`
    ${font};
    font-size: 2em;
    text-align: left;
    color: ${color.white};
    max-width: 35.25rem;
    opacity: 0;
    -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.3s forwards; 
    animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.3s forwards; 
    &::selection {
        background-color: ${color.aqua};
        color: ${color.white};
    }
`;

export const Button = styled.button`
    background-color: ${color.aqua};
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${color.white};
    border: none;
    width: 15.625rem;
    padding: 1.5rem 3.3rem 1.5rem 3.3rem;
    border-radius: 15px;
    cursor: pointer;
    opacity: 0;
    -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.4s forwards; 
    animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) 1.4s forwards; 
    &:focus{
        outline: none;
    }
`; 