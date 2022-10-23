import {BrowserRouter , Switch,  Route} from "react-router-dom"
import App from "./App"

const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}>

                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;