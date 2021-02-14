import {useState, useEffect} from "react"
import styled from "styled-components"
import {font} from "../Styles/StyledVariables"

export const StyledWeather = styled.p`
    ${font};
    font-size: 1.1rem!important;
    font-weight: 600;
    text-align: left;
    padding: 1.5rem 0 1.5rem 1.5rem;
    margin: 0;
`;

export default () => {
    const [weather, setWeather] = useState(null);
    //With API fetch
    useEffect(() => {
        fetch('https://www.el-tiempo.net/api/json/v2/provincias/08/municipios/08019', {
            headers : { 
                'Accept': 'application/json'
            }
        }) 
        .then(res => res.json())
        .then(res => setWeather(res.stateSky.description)); 
    }, []); 
    
    return (
        <StyledWeather>Avui: {weather}</StyledWeather>
    );
};