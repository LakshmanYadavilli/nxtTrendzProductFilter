import './index.css'

const RatingList = props => {
  const {data, changeRatingId} = props
  const {ratingId, imageUrl} = data
  const rating = () => {
    changeRatingId(ratingId)
  }

  return (
    <li>
      <button type="button" onClick={rating}>
        <img className="img" src={imageUrl} alt="rating" />
      </button>
    </li>
  )
}

export default RatingList
