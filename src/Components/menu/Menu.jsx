import './Menu.css';
import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import HelpIcon from '@material-ui/icons/Help';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="container-menu menu">
                <div className="menu-item container-centralized">
                    <HomeIcon className="icon" />
                    Home
                </div>
                <div className="menu-item container-centralized">
                    <HelpIcon className="icon" />
                    Preguntas
                </div>
                <div className="menu-item container-centralized">
                    <NotificationsIcon className="icon" />
                    Notif
                </div>
                <div className="menu-item container-centralized">
                    <AccountCircleIcon className="icon" />
                    Cuenta
                </div>
            </div>
        );
    }  
}
    
export default Menu;
