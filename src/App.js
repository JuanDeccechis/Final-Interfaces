import './App.css';
import React from 'react';
import Button from './Components/button/Button';
import Menu from './Components/menu/Menu';

const mobileMax = 425;
const tabletMax = 992;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      isMobile: window.innerWidth <= mobileMax,
      isTablet: ((mobileMax < window.innerWidth) && (window.innerWidth <= tabletMax)),
    }
  }

  componentDidMount(){
    window.addEventListener('resize', this.reportWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reportWindowSize);
  }

  reportWindowSize = (event) => {
    this.setState({ 
      width: window.innerWidth, 
      isMobile: window.innerWidth <= mobileMax, 
      isTablet: ((mobileMax < window.innerWidth) && (window.innerWidth <= tabletMax)), 
    });
  }

  handleClick() {
    console.log("click");
  }

  render() {
    const { width,isMobile,isTablet } = this.state;
    return (
      <>
      <div className="App container-centralized">
        width: {width}
        {isMobile && 
        <p>hola celu</p>
        }
        {isTablet &&
        <a href="www.google.com">link the tablet</a>}
        <Button content="text" isDisabled={false} handleClick={this.handleClick} />
      </div>
      <Menu></Menu>
      </>
    );
  }
}

export default App;
