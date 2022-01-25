import React, { Component } from "react";
import Button from '../Components/button/Button';
//import Input from '../Components/input/Input';
//import Input2 from '../Components/input/Input2';
import Input3 from '../Components/input/Input3';
import Header from '../Components/header/Header';
import Carrousel from '../Components/carrousel/Carrousel';
import Card from '../Components/card/Card';
import CardFlipable from '../Components/card/CardFlipable';
import CardBootstrapFlipable from '../Components/card/CardBootstrapFlipable';

import CardWithHover from '../Components/card/CardWithHover';

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibilityPassword: false,
        };
        this.handleChangeVisibilityPassword =
        this.handleChangeVisibilityPassword.bind(this);
        this.handleGoPlans = this.handleGoPlans.bind(this);
    }

    componentDidMount() {
        localStorage.setItem("plan", "asd");
    }

    handleLoggin = () => {
        const { handleLoggin } = this.props;
        let path = `/home`;
        handleLoggin();
        this.props.history.push(path);
    }

    handleGoPlans = () => {
        let path = `/plans`;
        this.props.history.push(path);
    }

    handleChangeVisibilityPassword() {
        this.setState({ visibilityPassword: !this.state.visibilityPassword });
    }

    render() {
        const { visibilityPassword } = this.state;
        const { isLogged } = this.props;
        return (
            <>
                <Header headerName="Login" />
                <article className={`container-pages ${isLogged ? 'container-logged' : 'container-no-logged'}`}>
                   {/*<Input name={"usuario"} minLength="0" maxLength="20" type="text">
                        <AccountCircleIcon className={`icon icon-color`} />
                        </Input>
                        <Input2 name={"user"} minLength="0" maxLength="20" type="text">
                        <AccountCircleIcon className={`icon icon-color`} />
                    </Input2>*/}
                    <Input3 name={"Usuario"} minLength="0" maxLength="20" type="text">
                        <AccountCircleIcon className={`icon icon-color`} />
                    </Input3>
                    <Input3
                        name={"Contraseña"}
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
                    </Input3>
<Carrousel />
                    <CardBootstrapFlipable title="asd" detail="lorem ipsul" img={null} height={100}/>
                    
                    <Button content="login" isDisabled={false} handleClick={this.handleLoggin} />
                    <Card title="asd" detail="lorem ipsul" img={null} height={100}/>
                    <CardFlipable title="asd" detail="lorem ipsul" img={null} height={100}/>
                    <CardWithHover title="asd" detail="lorem ipsul" img={null} height={100}/>
                        
                    <Button content="planes" isDisabled={false} handleClick={this.handleGoPlans} />
            </article>
            </>
        )
    }
}

export default LoginPage;
