import React from 'react'
import { useMainContext } from '../../context/MainContext'
import { Spinner } from 'react-bootstrap'

const ExploreCategory = ({ changeCat }) => {
  const {
    categoriesState: { categories, currentCategory, isLoading },
  } = useMainContext()

  return (
    <div className='explore-category'>
      <h1 className='fw-bold'>Explore Categories</h1>
      {isLoading ? (
        <Spinner animation='border' />
      ) : (
        <div className='d-flex flex-row flex-wrap mt-3'>
          {categories &&
            categories.map((cat) => (
              <div
                onClick={() => {
                  changeCat(cat.id)
                }}
                key={cat.id}
                className={`${
                  currentCategory?.id === cat.id ? 'active-cat' : ''
                } category-card btn btn-light px-4 rounded-pill me-2 mb-2 `}
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
