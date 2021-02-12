import {useState} from "react";
import axios from "axios";

export default () => {
    const [joke, setJoke] = useState("");
    //With Axios
    const getJoke = () => {
        axios
            .get("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((res) => {
                setJoke(res.data.joke);
            })
    }
    return (
        <div>
            <h1>Preparat per riure?	&#129315;</h1>
            <div>{joke}</div>
            <button onClick={() =>getJoke()}>Següent</button>
        </div>
    );
};