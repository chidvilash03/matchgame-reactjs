import './index.css'

const Scorecard = props => {
  const {score, playAgain} = props

  const again = () => {
    playAgain()
  }
  return (
    <div className="main-container">
      <div className="foo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy"
        />
        <p className="heading">YOUR SCORE</p>
        <p className="heading">{score}</p>
        <button type="button" className="btn-scorecard" onClick={again}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}
export default Scorecard
