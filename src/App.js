import {useState} from "react";

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
        <div>
            <h1>Preparat per riure?	&#129315;</h1>
            <div>{joke}</div>
            <button onClick={() =>getJoke()}>Següent</button>
        </div>
    );
};