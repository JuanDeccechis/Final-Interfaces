import './Button.css';
import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleNothing(event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("nothing");
    }

    render() {
        const { isDisabled, handleClick, content } = this.props;
        return (
            <button className={isDisabled ? "disabled" : ""} onClick={isDisabled ? this.handleNothing : handleClick}>
                {content}
            </button>
        );
    }  
}
    
export default Button;
