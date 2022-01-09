import './Header.css';
import React from 'react';
import RedditIcon from '@material-ui/icons/Reddit';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { headerName } = this.props;
        return (
            <header className="container-centralized">
                <RedditIcon className="logo icon" />
                <h2>{headerName}</h2>
            </header>
        );
    }  
}
    
export default Header;
