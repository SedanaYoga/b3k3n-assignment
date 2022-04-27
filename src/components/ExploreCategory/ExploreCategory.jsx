import React from 'react'
import { useMainContext } from '../../context/MainContext'

const ExploreCategory = ({ category, changeCat }) => {
  const { categoriesState } = useMainContext()

  return (
    <div>
      <h1 className='fw-bold'>Explore Categories</h1>
      <div className='d-flex flex-row flex-wrap'>
        {categoriesState?.categories &&
          categoriesState.categories.map((cat) => (
            <div
              onClick={() => {
                changeCat(cat.id)
              }}
              key={cat.id}
              className={`${
                category.id === cat.id ? 'active-cat' : ''
              } btn btn-light px-4 rounded-pill me-2 mb-2`}
            >
              {cat.name}
            </div>
          ))}
      </div>
    </div>
  )
}

export default ExploreCategory
