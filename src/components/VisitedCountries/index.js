import './index.css'

const VisitedCountries = props => {
  const {visitedList, onChangeStatus} = props

  const onClickRemoveBtn = () => {
    onChangeStatus(visitedList.id)
  }

  return (
    <li className="list">
      {visitedList !== null ? (
        <div>
          <img src={visitedList.imageUrl} alt="thumbnail" />
          <div className="visited-country-container">
            <p>{visitedList.name}</p>
            <button type="button" onClick={onClickRemoveBtn}>
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="heading">No Visited Countries View</h1>
        </div>
      )}
    </li>
  )
}

export default VisitedCountries
