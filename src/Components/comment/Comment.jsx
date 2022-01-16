import React from 'react';
import './Comment.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StarIcon from '@material-ui/icons/Star';


class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="comment-container input-icons">
                <div className="comment-body">
                    <AccountCircleIcon className={`icon icon-color`} />
                    <p className="text1">Noti1</p>
                    <div className="comment-calification">
                        <span>4</span>
                        <StarIcon className={`icon icon-color right`} />
                    </div>
                </div>
                <div className="comment-date">
                    <span className="text2">01/01/22</span>
                </div>
            </div>
        );
    }  
}
    
export default Comment;
