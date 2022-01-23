import React from 'react';
import './Card.css';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            
            <div className="card">
                <div className="image foto"></div>
                <div className="container">
                    <h4>asdfgd</h4> 
                    <p>Architect  Engineer</p> 
                </div>
            </div>          
        );
    }  
}
    
export default Card;
