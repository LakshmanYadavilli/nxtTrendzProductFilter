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
        {name}
      </button>
    </li>
  )
}

export default CategoryList
