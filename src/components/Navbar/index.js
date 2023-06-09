import {Component} from 'react'

import './index.css'

class Navbar extends Component {
  render() {
    const {timer, score} = this.props
    return (
      <nav className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className="score">
          <p className="head">
            Score: <span className="nav-span">{score}</span>
          </p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="nav-timer"
          />
          <p className="nav-span">{timer} sec</p>
        </div>
      </nav>
    )
  }
}
export default Navbar
