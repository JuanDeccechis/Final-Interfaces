import React from 'react';
import './Carrousel.css';

class Carrousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [1, 2, 3]
        }
    }

    render() {
        const { items } = this.state;
        return (
            
            <div className="carrousel">
                {items.map((item, index) => (
                    <div key={index} className="card">
                        <div className="image foto"></div>
                        <div className="container">
                            <h4>asdfgd</h4> 
                            <p>Architect  Engineer</p> 
                        </div>
                    </div>
                ))}
            </div>          
        );
    }  
}
    
export default Carrousel;
