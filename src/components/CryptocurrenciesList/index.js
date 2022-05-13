import './index.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'

const CryptocurrencyList = props => {
  const {cryptoDataList} = props

  return (
    <div className="bg-container">
      <h1 className="heading">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="crypto-img"
      />
      <ul className="list-container">
        <li className="header-list-item">
          <p className="header-first-item">Coin Type</p>
          <p className="header-list-content">USD</p>
          <p className="header-list-content">EURO</p>
        </li>
        {cryptoDataList.map(eachItem => (
          <CryptocurrencyItem cryptoDataItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default CryptocurrencyList
