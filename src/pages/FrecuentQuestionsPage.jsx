import React, { Component } from "react";
import Header from '../Components/header/Header';
import FAQ from '../Components/faq/FAQ';
import { FAQMock } from '../mocks/FAQMock';

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class FrecuentQuestionsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            selectedAccordion: -1,
        };
        this.isReady = this.isReady.bind(this);
        this.limpiarAcordion = this.limpiarAcordion.bind(this);
        this.desplegarAcordion = this.desplegarAcordion.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", () => this.limpiarAcordion());
        window.setTimeout(this.isReady, 1000);
    }

    componentWillUnmount() {
        window.removeEventListener("click", () => this.limpiarAcordion());
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

    limpiarAcordion() {
        let contenidos = document.querySelectorAll(".animaAccordion");
        let selectores = document.querySelectorAll(".muestraInfo");
        for (let index = 0; index < selectores.length; index++) {
            contenidos[index].classList.remove("animaAccordion");
            selectores[index].classList.remove("muestraInfo");
        }
        this.setState({ selectedAccordion: -1 });   
    }

    desplegarAcordion(numeroAcordion) {
        let contenidos = document.querySelectorAll(".accordion-content");
        let selector = document.querySelectorAll(".selectorAccordion");
        
        setTimeout(() => {
            if (numeroAcordion >= 0) {
                contenidos[numeroAcordion].classList.add("animaAccordion");
                selector[numeroAcordion].classList.add("muestraInfo");
            }
        }, 1000);
        this.setState({ selectedAccordion: numeroAcordion });
    }

    render() {
        const { isLoading, selectedAccordion } = this.state;
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
                        <span className="text1">Puedes contactarnos al 0800-sp.five, en caso que la siguiente lista no resuelva tu consulta.</span>
                        {FAQMock.map((mock, indexM) => (
                            <div key={indexM}>
                                <h2 className="FAQ-title">{mock.group}</h2>
                                <ul className="accordion-list">
                                    {mock.questions.map((question, indexQ) => (
                                        <li key={indexQ}>
                                            <div onClick={() => this.desplegarAcordion(question.number)}>
                                                <FAQ numeroAcordion={question.number} selectedAccordion={selectedAccordion} title={question.title} content={question.content} />
                                            </div>
                                        </li>
                                    ))}
                                    
                                </ul>
                            </div>
                        ))}
                       
                    </div>
                </article>
            }
        </>
        )
    }
}

export default FrecuentQuestionsPage;
