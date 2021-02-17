import {keyframes, css} from 'styled-components'

export const color = {
    aqua: "#36cdd9",
    white: '#fff'
}

export const font = {
    fontFamily: "Montserrat",
    color: "#2f2d2f"
}

export const start = keyframes`
    0% {
        transform: translateY(100%);
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`;

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

export const animation = (i) => css`
    -webkit-animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) ${i}s forwards; 
    animation: ${start} 0.8s cubic-bezier(0.27, 0.96, 0.58, 1) ${i}s forwards; 
`;

export const selection = {
    backgroundColor: color.aqua,
    color: color.white,
}