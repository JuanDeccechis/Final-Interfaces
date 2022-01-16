import React from 'react';
import './Notification.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="notification-container input-icons">
                <div className="notification-body">
                    <AccountCircleIcon className={`icon icon-color`} />
                    <p className="text1">Noti1</p>
                    {/*<AccountCircleIcon className={`icon icon-color right`} /> */}
                </div>
                <div className="notification-date">
                    <span className="text2">01/01/22</span>
                </div>
            </div>
        );
    }  
}
    
export default Notification;
