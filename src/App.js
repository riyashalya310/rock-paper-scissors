import {Component} from 'react'
import './App.css'
import Popup from 'reactjs-popup'
import Choice from './components/Choice'

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
  }

  renderChoices = () => {
    this.setState({renderResult: false})
    return (
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
  }

  renderScore = (id, imageUrl) => {
    const randomNumber = Math.floor(Math.random() * 10)
    const opponentChoice = choicesList[randomNumber % 3]
    let result = ''
    if (id === 'ROCK') {
      if (opponentChoice.id === 'PAPER') {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      } else {
        result = 'YOU WIN'
        this.setState(prevState => ({score: prevState.score + 1}))
      }
    } else if (id === 'PAPER') {
      if (opponentChoice.id === 'ROCK') {
        result = 'YOU WIN'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      }
    } else if (id === 'SCISSOR') {
      if (opponentChoice.id === 'PAPER') {
        result = 'YOU WIN'
        this.setState(prevState => ({score: prevState.score + 1}))
      } else {
        result = 'YOU LOSE'
        this.setState(prevState => ({score: prevState.score - 1}))
      }
    }
    return (
      <div>
        <p>YOU</p>
        <img src={imageUrl} alt="your choice" />
        <p>OPPONENT</p>
        <img src={opponentChoice.imageUrl} alt="opponent choice" />
        <p>{result}</p>
        <button type="button" onClick={this.renderChoices}>
          PLAY AGAIN
        </button>
      </div>
    )
  }

  onClickChoice = (id, imageUrl) => {
    this.setState({renderResult: true})
    return this.renderScore(id, imageUrl)
  }

  render() {
    const {score, renderResult} = this.state
    return (
      <div>
        <div>
          <p>ROCK</p>
          <p>PAPER</p>
          <p>SCISSORS</p>
          <p>Score</p>
          <p>{score}</p>
        </div>
        {renderResult ? this.renderScore() : this.renderChoices()}
        <Popup />
      </div>
    )
  }
}

export default App
