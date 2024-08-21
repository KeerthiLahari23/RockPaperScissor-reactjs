import {
  ScoreViewContainer,
  ScoreName,
  TotalScoreContainer,
  ScoreHeading,
  ScoreResult,
} from './StyledComponents'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreViewContainer>
      <ScoreName>
        ROCK <br />
        PAPER <br />
        SCISSORS
      </ScoreName>
      <TotalScoreContainer>
        <ScoreHeading>Score</ScoreHeading>
        <ScoreResult>{score}</ScoreResult>
      </TotalScoreContainer>
    </ScoreViewContainer>
  )
}

export default ScoreView
