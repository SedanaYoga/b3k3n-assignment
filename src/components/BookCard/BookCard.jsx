import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  removeSpecialChar,
  responsiveBookTitle,
} from '../../utils/mainUtils.js'
import { useMediaQuery } from 'react-responsive'

const BookCard = ({ book, category }) => {
  // const gfoldScreen = useMediaQuery({ query: 'min-width: 281px' })
  const ipseScreen = useMediaQuery({ query: 'min-width: 376px' })
  const smScreen = useMediaQuery({ query: '(min-width: 576px)' })
  const mdScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const lgScreen = useMediaQuery({ query: '(min-width: 992px)' })
  const xlScreen = useMediaQuery({ query: '(min-width: 1200px)' })
  const xxlScreen = useMediaQuery({ query: '(min-width: 1400px)' })

  return (
    <LinkContainer to={`/${removeSpecialChar(category.name)}/${book.id}`}>
      <div role='button'>
        <img
          className='rounded-1'
          style={{ width: '100%' }}
          src={book.cover_url}
          alt={book.title}
        />
        <p className='fw-bold mb-0' title={book.title}>
          {xxlScreen
            ? book.title
            : xlScreen
            ? responsiveBookTitle(book.title, 30)
            : lgScreen
            ? responsiveBookTitle(book.title, 23)
            : mdScreen
            ? responsiveBookTitle(book.title, 24)
            : smScreen
            ? responsiveBookTitle(book.title, 26)
            : ipseScreen
            ? responsiveBookTitle(book.title, 20)
            : responsiveBookTitle(book.title, 18)}
        </p>
        <p className='mb-0'>{category.name}</p>
      </div>
    </LinkContainer>
  )
}

export default BookCard
