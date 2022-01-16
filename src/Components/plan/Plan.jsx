import React from 'react';
import Button from '../button/Button';
import './Plan.css';

class Plan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.handleSelectPlan = this.handleSelectPlan.bind(this);
    }

    handleSelectPlan() {
        const { planTitle, setPlan } = this.props;
        localStorage.setItem("plan", planTitle);
        setPlan(planTitle);
    }

    render() {
        const { planTitle, planAmount, selectedPlan } = this.props;
        return (
            <div>
                <div className="plan-title">
                    <span className="text1 text1-bold">{planTitle}</span>
                    <span className="text1 text1-bold">USD {planAmount}</span>
                </div>
                <div className="plan-body">
                    <p className="text1">Plan por defecto, incluye:</p>
                    <ul>
                        <li className="text1">
                            Un usuario.
                        </li>
                        <li className="text1">
                            60 minutos sin publicidades.
                        </li>
                    </ul>
                </div>
                <Button content={selectedPlan === planTitle ? `${planTitle} seleccionado` : `Contratar ${planTitle}`} isDisabled={selectedPlan === planTitle} handleClick={this.handleSelectPlan} />
            </div>
        );
    }  
}
    
export default Plan;
