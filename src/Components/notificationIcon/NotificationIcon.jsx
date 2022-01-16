import React, { Component } from "react";
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import './NotificationIcon.css';


class NotificationIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 5,
        };
        this.handleClickNotificationIcon = this.handleClickNotificationIcon.bind(this);
    }

    componentDidMount() {
        
    }

    handleClickNotificationIcon() {
        this.setState({ showNotifications: !this.state.showNotifications });
    }

    render(){
        const { value, showNotifications } = this.state;
        return(
            <div className="notificationIcon-relative">

                { value === 0 ?
                    <div className="notificationIcon-container">
                        <NotificationsIcon className="icon" />
                    </div>
                    :
                    <div className="notificationIcon-container notificationIcon-not-empty" >
                        <NotificationsActiveIcon className={`icon ${showNotifications ? 'active' : ''}`}/>
                    <span className="notificationIcon-badge-value">{value}</span>
                </div>
                }
            </div>
        )
    }
}

export default (NotificationIcon);
