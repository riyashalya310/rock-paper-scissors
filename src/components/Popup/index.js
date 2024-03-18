import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {RiCloseLine} from 'react-icons/ri'

export default () => (
  <Popup
    trigger={<button type="button"> Rules</button>}
    position="right center"
  >
    {close => (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
          alt="rules"
        />
        <button
          type="button"
          className="trigger-button"
          onClick={() => close()}
        >
          <RiCloseLine />.
        </button>
      </>
    )}
  </Popup>
)
