import {
  GameViewContainer,
  Button,
  ButtonImg,
  ResultImgContainer,
  ResultHead,
  ResultImage,
  Result,
  PlayAgain,
} from './StyledComponents'

import './index.css'

const GameView = props => {
  const {choicesList, checkResult, isShow, text, array, resetGame} = props

  return (
    <GameViewContainer>
      {isShow && (
        <>
          <Button
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <ButtonImg
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </Button>
          <Button
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <ButtonImg
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </Button>
          <Button
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <ButtonImg
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </Button>
        </>
      )}
      {!isShow && (
        <>
          <div>
            <div className="you-opp-container">
              <ResultImgContainer>
                <ResultHead>YOU</ResultHead>
                <ResultImage src={array[0].imageUrl} alt="your choice" />
              </ResultImgContainer>
              <ResultImgContainer>
                <ResultHead>OPPONENT</ResultHead>
                <ResultImage src={array[1].imageUrl} alt="opponent choice" />
              </ResultImgContainer>
            </div>
            <div className="result-container">
              <ResultImgContainer>
                <Result>{text}</Result>
                <div className="button-container">
                  <PlayAgain type="button" onClick={() => resetGame()}>
                    Play Again
                  </PlayAgain>
                </div>
              </ResultImgContainer>
            </div>
          </div>
        </>
      )}
    </GameViewContainer>
  )
}

export default GameView
