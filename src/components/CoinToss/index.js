import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {isHead: true, totalCount: 0, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalCount: prevState.totalCount + 1,
        headsCount: prevState.headsCount + 1,
      }))
    } else if (tossResult === 1) {
      this.setState(prevState => ({
        isHead: false,
        totalCount: prevState.totalCount + 1,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {isHead, totalCount, headsCount, tailsCount} = this.state
    const imageUrl = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-img" />
          <button type="button" onClick={this.onTossCoin} className="btn">
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
