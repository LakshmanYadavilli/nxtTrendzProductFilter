import './index.css'

const FiltersGroup = props => {
  const {ratingsList, categoryOptions, categoryBtn, ratingBtn, input} = props
  const category = categoryId => categoryBtn(categoryId)

  const rating = ratingId => ratingBtn(ratingId)

  const changeInput = event => input(event.target.value)

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <input type="search" onChange={changeInput} />
      <ul>
        {categoryOptions.map(n => (
          <li key={n.categoryId}>
            <button type="button" onClick={category(n.categoryId)}>
              {n.name}
            </button>
          </li>
        ))}
      </ul>
      <ul>
        {ratingsList.map(m => (
          <li key={m.ratingId}>
            <button type="button" onClick={rating(m.ratingId)}>
              <img className="img" src={m.imageUrl} alt="rating" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FiltersGroup
