import React, { Component } from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './Notification.css';


class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
        };
        this.handleClickNotification = this.handleClickNotification.bind(this);
    }

    componentDidMount() {
        
    }

    handleClickNotification() {
        this.setState({ showNotifications: !this.state.showNotifications });
    }

    render(){
        const { value, showNotifications } = this.state;
        return(
            <div className="notification-relative">

                { value === 0 ?
                    <div className="notification-container">
                        <NotificationsIcon className="icon" />
                    </div>
                    :
                    <div className="notification-container notification-not-empty" >
                        <NotificationsActiveIcon className={`icon ${showNotifications ? 'active' : ''}`}/>
                    <span className="notification-badge-value">{value}</span>
                </div>
                }
            </div>
        )
    }
}

export default (Notification);
