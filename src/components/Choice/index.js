import './index.css'

const Choice = props => {
  const {details, onClickChoice} = props
  const {id, imageUrl} = details
  const clickChoice = () => {
    onClickChoice(id, imageUrl)
  }
  let dataTestId = ''
  if (id === 'ROCK') {
    dataTestId = 'rockButton'
  } else if (id === 'PAPER') {
    dataTestId = 'paperButton'
  } else {
    dataTestId = 'scissorsButton'
  }
  return (
    <button type="button" data-testid={dataTestId} onClick={clickChoice}>
      <img src={imageUrl} alt={id} />.
    </button>
  )
}
export default Choice
