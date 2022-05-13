import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDataItem} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = cryptoDataItem

  return (
    <li className="footer-list-item">
      <div className="currency-container">
        <img src={currencyLogo} alt={currencyName} className="currency-img" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <p className="currency-value">{usdValue}</p>
      <p className="currency-value">{euroValue}</p>
    </li>
  )
}

export default CryptocurrencyItem
