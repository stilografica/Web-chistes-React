import {useState} from "react"
import GlobalStyle from "./Styles/StyleGlobal"
import {StyledDiv} from "./Styles/StyledDiv"

export default () => {
    const [joke, setJoke] = useState("");
    //With API fetch
    const getJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers : { 
                'Accept': 'application/json'
            }
        }) 
        .then(res => res.json())
        .then(res => setJoke(res.joke)); 
    };
    return (
        <StyledDiv>
            <GlobalStyle />
            <h1>Preparat per riure?	&#129315;</h1>
            <p>{joke}</p>
            <button onClick={() =>getJoke()}>Següent acudit</button>
        </StyledDiv>
    );
};