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
                    <div className="notification-text-body">
                        <span className="text1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure magni, ratione tempora, iste quos ea harum sed recusandae totam, voluptates velit id ex tenetur itaque delectus eius perspiciatis laboriosam?    
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, repellat dolorum. Eaque voluptatibus totam ipsum veritatis aut vel sequi repellendus. Ea corporis totam facere id recusandae perferendis aliquam quas saepe.
                        </span>
                    </div>
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
