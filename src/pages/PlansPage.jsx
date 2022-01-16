import React, { Component } from "react";
import Header from '../Components/header/Header';
import Plan from '../Components/plan/Plan';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class PlansPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            plan: localStorage.getItem("plan"),
            
        };
        this.isReady = this.isReady.bind(this);
        this.handleSelectPlan = this.handleSelectPlan.bind(this);
    }

    componentDidMount() {
        window.setTimeout(this.isReady, 1000);   
    }

    isReady() {
        this.setState({ isLoading: false });
    }

    handleSelectPlan(planTitle) {
        this.setState({ plan: planTitle });
    }

    render() {
        const { isLoading, plan } = this.state;
        const { isLogged } = this.props;
        return (
            <>
            <Header headerName="Preguntas" />
            {isLoading ?
                <Loader
                type="TailSpin"
                color="#007BAD"
                height={100}
                width={100}
                className="loader container-centralized container-page"
                />
            :
                <article className={`container-pages ${isLogged ? 'container-logged' : 'container-no-logged'}`}>
                    <Plan planTitle="Plan básico" selectedPlan={plan} planAmount={100} setPlan={this.handleSelectPlan}/>
                    <Plan planTitle="Plan familiar" selectedPlan={plan} planAmount={250} setPlan={this.handleSelectPlan}/>
                </article>
            }
        </>
        )
    }
}

export default PlansPage;
