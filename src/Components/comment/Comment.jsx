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
                    <div className="comment-text-body">
                        <span className="text1">
                            Lorem ipsum dolor sit amet conse ctetur adipisicing elit. Cumque iure magni, ratione tempora, iste quos ea harum sed recusandae totam, voluptates velit id ex tenetur itaque delectus eius perspiciatis laboriosam?    
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, repellat dolorum. Eaque voluptatibus totam ipsum veritatis aut vel sequi repellendus. Ea corporis totam facere id recusandae perferendis aliquam quas saepe.                       
                        </span>
                    </div>
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
