import React, { Component } from "react";
import Button from '../Components/button/Button';
import Input from '../Components/input/Input';
import Input2 from '../Components/input/Input2';
import Header from '../Components/header/Header';

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityPassword: false,
            firstTry: true,
            remember: false,
        };
        this.handleChangeVisibilityPassword =
        this.handleChangeVisibilityPassword.bind(this);
    }

    handleLoggin = () => {
        const { handleLoggin } = this.props;
        let path = `/home`;
        handleLoggin();
        this.props.history.push(path);
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword: !this.state.visibilityPassword });
    }

    render() {
        const { visibilityPassword, firstTry, remember } = this.state;
        const { isLogged } = this.props;
        return (
            <>
                <Header headerName="Login" />
                <article className={`container-pages ${isLogged ? 'container-logged' : 'container-no-logged'}`}>
                    LOGIN
                    <p className="example-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sed provident cupiditate vitae commodi quae, earum autem quaerat! Praesentium quis distinctio incidunt fugit, facilis odio illo quam error culpa nemo!
                    </p>
                    <Button content="login" isDisabled={false} handleClick={this.handleLoggin} />
                    {/*<Input2 name={"usuario"} minLength="0" maxLength="20" type="text">
                        <AccountCircleIcon className={`icon icon-color`} />
                    </Input2>

                    <Input2
          name={"contraseña"}
          type={visibilityPassword ? "text" : "password"}
        >
          <LockOpenIcon className={`icon icon-color`} />
          {visibilityPassword ? (
            <VisibilityOffIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          ) : (
            <VisibilityIcon
              className={`icon icon-color right`}
              onClick={this.handleChangeVisibilityPassword}
            />
          )}
          </Input2>*/}

        <Input />
                </article>
            </>
        )
    }
}

export default LoginPage;
