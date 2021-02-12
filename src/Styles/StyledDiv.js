import styled from "styled-components"
import {color, font} from "./StyledVariables"

export const StyledDiv = styled.section`
	display: flex;
	flex-direction: column;
    justify-content: space-around;
    align-items: center;
	background-color: ${color.white};
	width: 45%;
    min-height: 30rem;
    box-shadow: 
        0 4px 8px rgba(0,0,0,0.08), 
        0 8px 16px rgba(0,0,0,0.08)
    }
	border-radius: 25px;
    padding: 2rem 6rem 2rem 6rem;

    h1{
		justify-self: flex-start;
		${font}
		font-size: 2.5rem;
        font-weight: 600;
        margin: 0;
        &::selection {
            background-color: ${color.aqua};
            color: ${color.white};
        }
    }

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
    
    button {
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
		&:focus{
			outline: none;
		}
    }

    @media screen and (max-width:790px){
		height: auto;
		overflow-y: auto;
    }
`; 