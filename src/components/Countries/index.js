import {Component} from 'react'

import './index.css'

class Countries extends Component {
  onClickVisitBtn = () => {
    const {onChangeVisitStatus, countryList} = this.props
    onChangeVisitStatus(countryList.id)
  }

  render() {
    const {countryList} = this.props

    const {name, isVisited} = countryList

    const buttonText = isVisited ? 'Visited' : 'Visit'

    const buttonBg = isVisited ? 'visited-button' : ''

    return (
      <div>
        <li>
          <div className="country-container">
            <p className="country-name">{name}</p>
            <button
              type="button"
              className={`visit-button ${buttonBg}`}
              onClick={this.onClickVisitBtn}
            >
              {buttonText}
            </button>
          </div>
        </li>
      </div>
    )
  }
}

export default Countries
