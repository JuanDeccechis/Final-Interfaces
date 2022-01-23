import React from 'react';
import Button from '../button/Button';
import './CardBootstrapFlipable.css';

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
            <div className="container-text">
                <h4>John Doe</h4> 
                <div className="container-text-body">
                    <span className="text1">Some example text some example text. John Doe is an atchitect and engineer</span> 
                </div>
                <Button content="Comprar" />
            </div>
          </div>
        );
    }  
}
    
export default CardFlipable;
