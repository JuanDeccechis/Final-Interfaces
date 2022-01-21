import React, { Component } from "react";
import Header from '../Components/header/Header';
import FAQ from '../Components/faq/FAQ';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class FrecuentQuestionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            
        };
        this.isReady = this.isReady.bind(this);
    }

    componentDidMount() {
        window.setTimeout(this.isReady, 1000);   
    }

    isReady() {
        this.setState({ isLoading: false });
    }

    handleLogout = () => {
        const { handleLogout } = this.props;
        let path = `/login`;
        handleLogout();
        this.props.history.push(path);
    }

    render() {
        const { isLoading } = this.state;
        const { isLogged, primayColor } = this.props;
        return (
            <>
            <Header headerName="Preguntas" />
            {isLoading ?
                <Loader
                type="TailSpin"
                color={primayColor}
                height={100}
                width={100}
                className="loader container-centralized container-page"
                />
            :
                <article className={`container-pages ${isLogged ? 'container-logged' : 'container-no-logged'}`}>
                    <div>
                        <p className="text1">Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta.</p>
                        <h2 className="FAQ-title">Pagos</h2>
                        <FAQ />
                    </div>
                </article>
            }
        </>
        )
    }
}

export default FrecuentQuestionsPage;
