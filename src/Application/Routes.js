import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Welcome from "../Components/Welcome"
import JokePage from "../Components/JokePage"

export default () => {
    return ( 
        <Router>
            <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/JokePage" component={JokePage} />
            </Switch>
        </Router> 
    )
};
