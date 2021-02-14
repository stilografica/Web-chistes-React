import {useState} from "react"
import {StyledArticle} from "../Styles/StyledArticle"

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
        <StyledArticle>
            <section>
                <h1>Preparat per riure?	&#129315;</h1>
                <p>{joke}</p>
                <button onClick={() =>getJoke()}>Següent acudit</button>
            </section>
        </StyledArticle>
    );
};