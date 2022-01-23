import React from 'react';
import './CardWithHover.css';

class CardWithHover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            
            <div className="card">
                <div className="image foto">
                    <div className="container-centralized image-text">
                        <h4>Imagen</h4>
                    </div>
                </div>
                <div className="container">
                    <h4>asdfgd</h4> 
                    <p>Architect  Engineer</p> 
                </div>
            </div>/*
            <div className="hero-image">
            <div className="hero-text">
              <h1>I am Jane Doe</h1>
              <h3>And I'm a Photographer</h3>
              <button>Hire me</button>
            </div>
          </div>*/
          
        );
    }  
}
    
export default CardWithHover;
