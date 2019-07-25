import React, { Component } from 'react';
import './App.css';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'
import ErrorPage from './ErrorPage'

class App extends Component {
  state = {
    lat: null,
    errMessage: '',
    time: new Date().toLocaleTimeString()
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    }, 1000)

    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMessage: err.message })
    );
  }

  render() {
    if (this.state.lat && !this.state.errMessage) {
      return (
        <div>
          <SeasonDisplay lat={this.state.lat} time={this.state.time} />
        </div>
      );
    }
    if (!this.state.lat && this.state.errMessage) {
      return (
        <div>
          <ErrorPage Error={this.state.errMessage} />
        </div>
      );
    }

    return (
      <Loader message="please accept location request..." />
    )
  }

}

export default App;
