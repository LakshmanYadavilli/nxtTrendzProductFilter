import './index.css'

const CategoryList = props => {
  const {data, changeCategoryId} = props
  const {categoryId, name} = data

  const category = () => {
    changeCategoryId(categoryId)
  }

  return (
    <li>
      <button type="button" onClick={category}>
        <p>{name}</p>
      </button>
    </li>
  )
}

export default CategoryList
