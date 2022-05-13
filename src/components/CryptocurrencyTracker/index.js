import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyList from '../CryptocurrenciesList/index'

class CryptocurrencyTracker extends Component {
  state = {cryptoDataList: [], isDataLoaded: false}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const convertedData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))

    this.setState({cryptoDataList: convertedData, isDataLoaded: true})
  }

  showLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {cryptoDataList, isDataLoaded} = this.state

    const sendData = () => (
      <CryptocurrencyList cryptoDataList={cryptoDataList} />
    )

    return (
      <div className="background-container">
        {isDataLoaded ? sendData() : this.showLoader()}
      </div>
    )
  }
}

export default CryptocurrencyTracker
