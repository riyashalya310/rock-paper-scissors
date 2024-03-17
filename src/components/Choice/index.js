import './index.css'

const Choice = props => {
  const {details} = props
  const {id, imageUrl} = details
  let dataTestId = ''
  if (id === 'ROCK') {
    dataTestId = 'rockButton'
  } else if (id === 'PAPER') {
    dataTestId = 'paperButton'
  } else {
    dataTestId = 'scissorButton'
  }
  return (
    <button type="button" data-testid={dataTestId}>
      <img src={imageUrl} alt="your choice" />.
    </button>
  )
}
export default Choice
