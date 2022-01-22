import React, { Component } from 'react'
import './FAQ.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { title, content } = this.props;
        return (
            <>
                <div className="accordion-title-container">
                    <div className="accordion-title">
                        <span className="text1 bold">{title}</span> 
                    </div>
                    <div className="selectorAccordion">
                        <ExpandMoreIcon className={`icon right`}/>
                    </div>
                </div>
                <div className="accordion-content">
                    <div className="accordion-content-position">
                        <span className="text1">{content}</span>
                    </div>
                </div>
            </>
        )
    }
}

export default FAQ;