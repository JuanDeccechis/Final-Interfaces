import React from 'react';
import './CardFlipable.css';

class CardFlipable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="flip-container">
            <div className="card-flipable">
              <div className="container-centralized frente">
              </div>
              <div className="container-centralized dorso">
                <h3>Dorso</h3>
                <p>Más información aquí</p>
              </div>
            </div>
          </div>         
        );
    }  
}
    
export default CardFlipable;
