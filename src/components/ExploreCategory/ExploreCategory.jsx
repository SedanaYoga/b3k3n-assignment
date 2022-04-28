import React from 'react'
import { useMainContext } from '../../context/MainContext'

const ExploreCategory = ({ changeCat }) => {
  const {
    categoriesState: { categories, currentCategory, isLoading },
  } = useMainContext()

  return (
    <div>
      <h1 className='fw-bold'>Explore Categories</h1>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='d-flex flex-row flex-wrap'>
          {categories &&
            categories.map((cat) => (
              <div
                onClick={() => {
                  changeCat(cat.id)
                }}
                key={cat.id}
                className={`${
                  currentCategory?.id === cat.id ? 'active-cat' : ''
                } btn btn-light px-4 rounded-pill me-2 mb-2`}
              >
                {cat.name}
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default ExploreCategory
