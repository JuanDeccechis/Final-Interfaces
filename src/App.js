import './App.css';
import React from 'react';
import Router from './pages/Router';

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
    localStorage.setItem("isLogged", "false");
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
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;
