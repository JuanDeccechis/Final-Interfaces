import React, { Component } from 'react'
import './FAQ.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class FAQ extends Component {
    constructor(props) {
        super(props);
        this.state = {
                    };
        this.limpiarAcordion = this.limpiarAcordion.bind(this);
        this.desplegarAcordion = this.desplegarAcordion.bind(this);
    }

    componentDidMount() {
        window.addEventListener("click", () => this.limpiarAcordion());
        
    }

    limpiarAcordion() {
        let contenidos = document.querySelectorAll(".animaAccordion");
        let selectores = document.querySelectorAll(".muestraInfo");
        for (let index = 0; index < contenidos.length; index++) {
            contenidos[index].classList.remove("animaAccordion");
            selectores[index].classList.remove("muestraInfo");
        }        
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
    }
    
    
    

    render() {
        return (
            <div className="espaciado">
        <div className="questions-form">
            <div className="questions-titles">
            <span>Uso</span>
            </div>
        <ul className="accordion-list">
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(0)}>
                    <div className="inline">
                        <div className="accordion-title"> 
                            <span>Como doy de alta el servicio?</span>
                        </div> 
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(1)}>
                    <div className="inline">
                        <div className="accordion-title">
                            <span> Cuanto cuesta? </span>
                        </div>
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(2)}>
                    <div className="inline">
                        <div className="accordion-title"> 
                            <span>Donde veo mis playlist?</span>
                        </div>
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem, quis. Dignissimos veniam alias similique sint quisquam mollitia praesentium adipisci fugiat atque vitae doloremque consequuntur dolorum, quibusdam sequi, enim doloribus quidem?</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(3)}>
                    <div className="inline">    
                        <div className="accordion-title"> 
                            <span>Como subo un audio</span>
                        </div>
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non eveniet amet tenetur error ullam ea voluptatum enim ut porro quae, minima accusantium sunt assumenda perferendis ad quas beatae aperiam obcaecati?</p>
                    </div>
                </div>
            </li>
        </ul>
        </div>
        <div className="questions-form">
            <div className="questions-titles">
                <span>Pagos</span>
            </div>
        <ul className="accordion-list">
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(4)}>
                    <div className="inline">
                        <div className="accordion-title"> 
                            <span>Como realizo los pagos?</span>
                        </div>
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus deserunt neque possimus voluptate architecto corporis exercitationem laudantium quo blanditiis rem labore et, voluptatibus minus perferendis, expedita delectus beatae sequi sed.</p>
                    </div>
                </div>
            </li>
            <li>
                <div className="accordion" onClick={() => this.desplegarAcordion(5)}>
                    <div className="inline">
                        <div className="accordion-title"> 
                            <span>Cuando se habilita mi plan?</span>
                        </div>
                        <div className="selectorAccordion">
                            <ExpandMoreIcon className={`icon right`}/>
                        </div>
                    </div>
                    <div className="accordion-content">
                        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam corporis tempore nobis laudantium explicabo velit aspernatur eveniet! Consequuntur sapiente atque natus alias tenetur expedita magni autem eum fugiat error.</p>
                    </div>
                </div>
            </li>
            
        </ul>
        </div>
    </div>
        )
    }
}

export default FAQ;