// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState => ({
      speed: prevState.speed < 200 ? prevState.speed + 10 : 200,
    }))
  }

  onBreak = () => {
    this.setState(prevState => ({
      speed: prevState.speed > 0 ? prevState.speed - 10 : 0,
    }))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bgContainer">
        <div className="contentContainer">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
          <h2 className="h2Heading">Speed is {speed}mph</h2>
          <p className="limitRange">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttonsContainer">
            <button
              className="accButton"
              type="button"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button
              className="breakButton"
              type="button"
              onClick={this.onBreak}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
