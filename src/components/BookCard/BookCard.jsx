import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

const BookCard = ({ book, category }) => {
  return (
    <LinkContainer
      to={`/books/${category.name.replace(/[ $#@%!&*()]/g, '').toLowerCase()}/${
        book.id
      }`}
    >
      <div role='button' className='rounded-3'>
        <img style={{ width: '100%' }} src={book.cover_url} alt={book.title} />
        <p className='fw-bold mb-0'>{book.title}</p>
        <p className='mb-0'>{category.name}</p>
      </div>
    </LinkContainer>
  )
}

export default BookCard
