import React, { Component } from "react";
import Header from '../Components/header/Header';
import Notification from '../Components/notification/Notification';
import Comment from '../Components/comment/Comment';
import NewComment from '../Components/comment/NewComment';
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
        const { isLogged, primayColor } = this.props;
        const { isLoading, value, showNotifications, notificationData } = this.state;
        return (
            <>
                <Header headerName="Notificaciones" />
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
                        <Notification />
                        <Comment />
                        <NewComment name={"Nuevo comentario"} minLength="0" type="text"/>
                    </article>
                }
            </>
        )
    }
}

export default NotificationsPage;
