
import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import PlansPage from "./PlansPage";
import NotificationsPage from "./NotificationsPage";
import FrecuentQuestionsPage from "./FrecuentQuestionsPage";
import Menu from '../Components/menu/Menu';

class Router extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: localStorage.getItem("isLogged") === "true",
        }
    }

    handleToggleLoged = () => {
        localStorage.setItem("isLogged", !this.state.isLogged);
        this.setState({ isLogged : !this.state.isLogged });
    }

    render() {
        const { isLogged } = this.state;
        return (
            <div className="container-pages">
                <BrowserRouter basename="/Final-Interfaces">
                {isLogged ? 
                    <>
                        <Switch>
                            <Route path="/home" component={(props) => <HomePage {...props} isLogged={isLogged} handleLogout={this.handleToggleLoged} /> }></Route>
                            <Route path="/notifications" component={(props) => <NotificationsPage {...props} isLogged={isLogged} /> }></Route>
                            <Route path="/frecuentQuestions" component={(props) => <FrecuentQuestionsPage {...props} isLogged={isLogged} /> }></Route>                            
                            <Route exact path="/"><Redirect to="/home" /></Route>
                        </Switch>
                        <Menu />
                    </>
                :
                <Switch>
                        <Route path="/login" component={(props) => <LoginPage {...props} isLogged={isLogged} handleLoggin={this.handleToggleLoged} /> }></Route>
                        <Route path="/plans" component={(props) => <PlansPage {...props} isLogged={isLogged} handleLogout={this.handleToggleLoged} /> }></Route>                            
                        <Route exact path="/"><Redirect to="/login" /></Route>
                    </Switch>
                }
                </BrowserRouter>
            </div>
        );
    }
}

export default Router;
