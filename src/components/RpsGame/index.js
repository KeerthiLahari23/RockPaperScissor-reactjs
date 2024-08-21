import {Component} from 'react'

import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'

import {
  MainContainer,
  PopupContainer,
  RulesButtonContainer,
  RulesButton,
  PopupView,
  PopupImage,
  CloseButton,
} from './StyledComponents'
import ScoreView from '../ScoreView'
import GameView from '../GameView'

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

class RpsGame extends Component {
  state = {
    score: 0,
    text: 'YOU WON',
    isShow: true,
    array: [choicesList[0], choicesList[1]],
  }

  getResult = (mine, random) => {
    if (mine.id === 'ROCK') {
      switch (random.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (mine.id === 'PAPER') {
      switch (random.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (random.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  checkResult = id => {
    const myChoice = choicesList.filter(each => each.id === id)
    const randomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    console.log(myChoice)
    console.log(randomChoice)
    const result = this.getResult(myChoice[0], randomChoice)
    const {score} = this.state
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      text: result,
      isShow: false,
      array: [myChoice[0], randomChoice],
    })
  }
  resetGame = () => {
    this.setState({isShow: true})
  }
  render() {
    const {score, isShow, array, text} = this.state
    return (
      <MainContainer>
        <ScoreView score={score} />
        <GameView
          choicesList={choicesList}
          checkResult={this.checkResult}
          array={array}
          text={text}
          isShow={isShow}
          resetGame={this.resetGame}
        />
        <PopupContainer>
          <Popup
            modal
            trigger={
              <RulesButtonContainer>
                <RulesButton>Rules</RulesButton>
              </RulesButtonContainer>
            }
          >
            {close => (
              <PopupView>
                <CloseButton type="button" onClick={() => close()}>
                  <IoMdClose />
                </CloseButton>
                <PopupImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupView>
            )}
          </Popup>
        </PopupContainer>
      </MainContainer>
    )
  }
}

export default RpsGame
