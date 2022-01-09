import './App.css';
import React from 'react'

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

  render() {
    const { width,isMobile,isTablet } = this.state;
    return (
      <div className="App">
        width: {width}
        {isMobile && 
        <p>hola celu</p>
        }
        {isTablet &&
        <a>link the tablet</a>}
        <button>boton</button>
      </div>
    );
  }
}

export default App;
