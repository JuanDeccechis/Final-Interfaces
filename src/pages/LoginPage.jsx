import React, { Component } from "react";
import Button from '../Components/button/Button';
import Header from '../Components/header/Header';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleLoggin = () => {
        const { handleLoggin } = this.props;
        let path = `/home`;
        handleLoggin();
        this.props.history.push(path);
    }

    render() {
        return (
            <>
                <Header headerName="Login" />
                <article className="container">
                    LOGIN
                    <p className="example-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
                    </p>
                    <Button content="login" isDisabled={false} handleClick={this.handleLoggin} />
                </article>
            </>
        )
    }
}

export default LoginPage;
