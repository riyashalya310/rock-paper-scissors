import {Component} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import './App.css'
import Choice from './components/Choice'
import ScoreComponent from './components/Choice/styledComponent'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    renderResult: false,
    id: null,
    imageUrl: '',
  }

  renderChoices = () => (
    <ul>
      {choicesList.map(choice => (
        <Choice
          details={choice}
          key={choice.id}
          onClickChoice={this.onClickChoice}
        />
      ))}
    </ul>
  )

  onClickPlayAgain = () => {
    this.setState({renderResult: false})
  }

  renderScore = (id, imageUrl) => {
    const randomNumber = Math.floor(Math.random() * 10)
    const opponentChoice = choicesList[randomNumber % 3]
    let result = ''
    if (id === 'ROCK') {
      if (opponentChoice.id === 'PAPER') {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else if (opponentChoice.id === 'SCISSOR') {
        result = 'YOU W0N'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        result = 'IT IS DRAW'
      }
    } else if (id === 'PAPER') {
      if (opponentChoice.id === 'ROCK') {
        result = 'YOU W0N'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (opponentChoice.id === 'SCISSOR') {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else {
        result = 'IT IS DRAW'
      }
    } else if (id === 'SCISSOR') {
      if (opponentChoice.id === 'PAPER') {
        result = 'YOU W0N'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (opponentChoice.id === 'ROCK') {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else {
        result = 'IT IS DRAW'
      }
    }
    return (
      <div>
        <p>YOU</p>
        <img src={imageUrl} alt="your choice" />
        <p>OPPONENT</p>
        <img src={opponentChoice.imageUrl} alt="opponent choice" />
        <p>{result}</p>
        <button type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  onClickChoice = (id, imageUrl) => {
    this.setState({renderResult: true, id, imageUrl})
    return this.renderScore(id, imageUrl)
  }

  render() {
    const {score, renderResult, id, imageUrl} = this.state
    return (
      <div>
        <div>
          <h1>ROCK PAPER SCISSORS</h1>
          <p>Score</p>
          <ScoreComponent>{score}</ScoreComponent>
        </div>
        {renderResult ? this.renderScore(id, imageUrl) : this.renderChoices()}
        <Popup
          trigger={<button type="button">Rules</button>}
          position="right center"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </Popup>
      </div>
    )
  }
}

export default App
