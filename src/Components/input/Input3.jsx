import './Input3.css';
import React from 'react';

class Input3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: true,
        }
    }

    render() {
        const { error } = this.state;
        let childrenWithExtraProp = [];
        if (this.props.children) {
            childrenWithExtraProp = React.Children.map(this.props.children, child => {
                return React.cloneElement(child, {
                    className: `${child.props.className} ${error ? "with-error error-text" : ''}`
                });
              });
        }
        return (
            <>
                <fieldset aria-hidden="true" className={`input-icons ${error ? '' : 'input-margin'}`}>
                    <legend>
                        <span className="text2">Email Address *</span>
                    </legend>
                    {this.props.children && 
                        childrenWithExtraProp[0] /* el ícono */}
                    <input className="text1" id="usuario" name="usuario" type="text" placeholder="Usuario*" required value={this.state.valueUsuario} onChange={this.handleChangeUsuario}/>
                    {childrenWithExtraProp[1] /* el ojo */}
                </fieldset>
                {error &&
                    <span className="text2 error-text">errpr</span>
                }
            </>
        );
    }  
}
    
export default Input3;
