import React, { useCallback, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../../assets/back-icon.svg'
import { useMainContext } from '../../context/MainContext'

const BookPage = () => {
  const { category, id } = useParams()
  const [book, setBook] = useState({})
  const { booksState } = useMainContext()
  const navigate = useNavigate()

  const getBookFromContext = useCallback(() => {
    const book = booksState.books.find((book) => book.id === +id)
    setBook(book)
  }, [booksState.books])

  useEffect(() => {
    getBookFromContext()
    console.log('Context Request from BookPage.jsx')
  }, [getBookFromContext])

  return (
    <Container className='mt-5'>
      <div
        role='button'
        onClick={() => navigate(`/${category}`)}
        className='d-flex flex-row align-items-center'
      >
        <BackIcon />
        <p className='m-0 ms-2 fw-bold'>Back to browse</p>
      </div>
      <h1>{book?.title}</h1>
    </Container>
  )
}

export default BookPage
