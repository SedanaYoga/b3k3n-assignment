import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { useMainContext } from '../../context/MainContext'

const ExploreCategory = () => {
  const {
    state: { categoriesState },
  } = useMainContext()

  return (
    <div>
      <h1 className='fw-bold'>Explore Categories</h1>
      <div className='d-flex flex-row flex-wrap'>
        <LinkContainer to={`/category/all`}>
          <div className='btn btn-light px-4 rounded-pill me-2 mb-2'>All</div>
        </LinkContainer>
        {categoriesState?.categories &&
          categoriesState.categories.map((cat) => (
            <LinkContainer
              to={`/category/${cat.name.replace(/[ !@#$%^&*)(]/g, '')}`}
              key={cat.id}
            >
              <div className='btn btn-light px-4 rounded-pill me-2 mb-2'>
                {cat.name}
              </div>
            </LinkContainer>
          ))}
      </div>
    </div>
  )
}

export default ExploreCategory
