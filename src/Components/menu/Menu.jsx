import './Menu.css';
import React from 'react';
import { NavLink } from "react-router-dom";

import NotificationIcon from '../notificationIcon/NotificationIcon';

import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-menu menu">
                <NavLink exact to="/home" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <HomeIcon className="icon" />
                        Home
                    </div>
                </NavLink>
                <NavLink exact to="/frecuentQuestions" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <HelpIcon className="icon" />
                        Preguntas
                    </div>
                </NavLink>
                <NavLink exact to="/notifications" className="menu-item container-centralized" /*"link nav-text"*/ activeClassName="active"> 
                    <div className="menu-item container-centralized">
                        <NotificationIcon />
                        Notif
                    </div>
                </NavLink>
                <div className="menu-item menu-item-last container-centralized">
                    <AccountCircleIcon className="icon" />
                    Cuenta
                </div>
            </div>
        );
    }  
}
    
export default Menu;
