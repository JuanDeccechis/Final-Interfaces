import React, { Component } from "react";
import Header from '../Components/header/Header';
// import Loader from "react-loader-spinner";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

 
    render() {
        const {  } = this.state;
        
        return (
            <>
                <Header headerName="Home" />
                <article className="container">
                    HOME
                    <p className="example-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
                    </p>
                </article>
            </>
        )
    }
}

export default HomePage;
