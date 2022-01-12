import CategoryList from '../CategoryList'
import RatingList from '../RatingList'
import './index.css'

const FiltersGroup = props => {
  const {ratingsList, categoryOptions, categoryBtn, ratingBtn, input} = props
  const changeCategoryId = categoryId => categoryBtn(categoryId)

  const changeRatingId = ratingId => ratingBtn(ratingId)

  const changeInput = event => input(event.target.value)

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" onChange={changeInput} />
      <ul>
        {categoryOptions.map(n => (
          <CategoryList
            key={n.categoryId}
            data={n}
            changeCategoryId={changeCategoryId}
          />
        ))}
      </ul>
      <ul>
        {ratingsList.map(m => (
          <RatingList
            key={m.ratingId}
            data={m}
            changeRatingId={changeRatingId}
          />
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
