import React, { Component } from "react";
import Header from '../Components/header/Header';
import Button from '../Components/button/Button';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class NotificationsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            showNotifications: false,
            notificationData: [{
                "text": "Nuevas ofertas en nuestros planes",
                "index": 0,
                "destiny": "/register"
            }, {
                "text": "A Gerónimo Casanova le gustó tu comentario",
                "index": 1,
                "destiny": "/home"
            }, {
                "text": "Pepe Rodriguez te envió una solicitud",
                "index": 2,
                "destiny": "/home"
            }, {
                "text": "María Fernandez compartió una foto",
                "index": 3,
                "destiny": "/home"
            }, {
                "text": "Es cumpleaños de Pilar De La Canal",
                "index": 4,
                "destiny": "/home"
            }],
        };
        this.isReady = this.isReady.bind(this);
    }

    componentDidMount() {
        window.setTimeout(this.isReady, 1000);   
    }

    isReady() {
        this.setState({ isLoading: false });
    }

    render() {
        const { isLogged } = this.props;
        const { isLoading, value, showNotifications, notificationData } = this.state;
        return (
            <>
                <Header headerName="Home" />
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
                        NOTIF
                        <div id="myDropdown" className="dropdown-content">
                    <div className="user_ctrl_box center">
                        <h2 className="dropdown-title">{notificationData.length} Notificaciones</h2>
                        { notificationData.map((notif, index) => 
                            <div className="notification_user_dropdown_menu" key={index}>
                                <span>{notif.text}</span>
                            </div>
                        )}
                    </div>   
                </div>
                    </article>
                }
            </>
        )
    }
}

export default NotificationsPage;
