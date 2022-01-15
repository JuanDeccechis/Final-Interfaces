import './Input.css';
import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: true,
        }
    }

    render() {
        const { error } = this.state;
        return (
            <>
                <fieldset aria-hidden="true" className={error ? '' : 'input-margin'}>
                    <legend>
                        <span className="text2">Email Address *</span>
                    </legend>
                    
                    <input className="text1" id="usuario" name="usuario" type="text" placeholder="Usuario*" required value={this.state.valueUsuario} onChange={this.handleChangeUsuario}/>
                </fieldset>
                {error &&
                    <span className="text2 error-text">errpr</span>
                }
            </>
        );
    }  
}
    
export default Input;
