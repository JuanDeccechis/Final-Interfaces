
import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import Menu from '../Components/menu/Menu';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: localStorage.getItem("isLogged") === "true",
        }
    }

    handleLoggin = () => {
        localStorage.setItem("isLogged", !this.state.isLogged);
        this.setState({ isLogged : !this.state.isLogged });
    }

    render() {
        const { isLogged } = this.state;
        return (
            <div className="container-centralized">
                <BrowserRouter basename="/Final-Interfaces">
                {isLogged ? 
                    <Switch>
                        <Route path="/" component={HomePage}></Route>
                    </Switch>
                :
                    <Switch>
                        <Route path="/login" component={(props) => <LoginPage {...props} handleLoggin={this.handleLoggin} /> }></Route>
                    </Switch>
                }
                </BrowserRouter>
                
                {isLogged && 
                    <Menu />
                }
            </div>
        );
    }
}

export default Router;
