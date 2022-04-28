import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { removeSpecialChar } from '../../utils/mainUtils.js'

const BookCard = ({ book, category }) => {
  return (
    <LinkContainer to={`/${removeSpecialChar(category.name)}/${book.id}`}>
      <div role='button'>
        <img
          className='rounded-1'
          style={{ width: '100%' }}
          src={book.cover_url}
          alt={book.title}
        />
        <p className='fw-bold mb-0'>{book.title}</p>
        <p className='mb-0'>{category.name}</p>
      </div>
    </LinkContainer>
  )
}

export default BookCard
