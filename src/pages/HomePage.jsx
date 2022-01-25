import React, { Component } from "react";
import Header from '../Components/header/Header';
import Button from '../Components/button/Button';
import Input3 from '../Components/input/Input3';
import SearchIcon from '@material-ui/icons/Search';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
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
                <Header headerName="Home" />
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
                        HOME
                        <Button content="logout" isDisabled={false} handleClick={this.handleLogout} />
                        <Input3 name={"Buscar"} minLength="0" maxLength="20" type="search">
                        <SearchIcon className={`icon icon-color right`} />
                    </Input3>
                    </article>
                }
            </>
        )
    }
}

export default HomePage;
