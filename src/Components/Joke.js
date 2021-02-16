import {useState} from "react"
import {StyledArticle, Button, H1} from "../Styles/StyledArticle"

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
                <H1>Preparat per riure?	&#129315;</H1>
                <p>{joke}</p>
                <Button onClick={() =>getJoke()}>Següent acudit</Button>
            </section>
        </StyledArticle>
    );
};