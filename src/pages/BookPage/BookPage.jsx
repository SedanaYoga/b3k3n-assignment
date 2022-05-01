import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../../assets/back-icon.svg'
import { ReactComponent as ClockIcon } from '../../assets/clock-alarm.svg'
import { ReactComponent as BookmarkOff } from '../../assets/bookmark-off.svg'
import { ReactComponent as BookmarkOn } from '../../assets/bookmark-on.svg'
import { useMainContext } from '../../context/MainContext'
import Accordion from '../../components/Accordion/Accordion'
import { removeSpecialChar } from '../../utils/mainUtils'

const BookPage = () => {
  const { category, id } = useParams()
  const [book, setBook] = useState({})
  const [isLoadingBook, setIsLoadingBook] = useState(true)
  const {
    booksState,
    categoriesState: { categories },
    getBooks,
    setCurrentCategory,
    addBookmarks,
    removeBookmark,
    bookmarkState: { bookmarkBooks },
  } = useMainContext()
  const navigate = useNavigate()

  const paramsCategory = categories.find(
    (cat) => removeSpecialChar(cat.name) === category
  )
  const getBookFromContext = useCallback(async () => {
    if (
      paramsCategory?.id !== booksState.books[0]?.category_id ||
      paramsCategory?.id === undefined
    ) {
      console.log(`Fetching the right books category: ${paramsCategory?.id}`)
      await getBooks(paramsCategory?.id)
      setCurrentCategory(paramsCategory)
    } else {
      console.log(
        `Already using the right books Category ${booksState.books[0]?.category_id}`
      )
      const book = booksState.books.find((book) => book.id === +id)

      setBook(book)
      setCurrentCategory(paramsCategory)
      setIsLoadingBook(false)
    }
  }, [booksState.books, id])

  useEffect(() => {
    getBookFromContext()
    console.log('Context Request from BookPage.jsx')
  }, [getBookFromContext])

  const toggleBookmarkHandler = () => {
    if (bookmarkBooks.map(({ id }) => id).includes(book.id) === false) {
      const { description, sections, audio_length, ...dataToSave } = book
      addBookmarks(dataToSave)
    } else {
      console.log('Book is Bookmarked, removing')
      removeBookmark(book.id)
    }
  }

  return (
    <Container className='mt-3'>
      {isLoadingBook ? (
        <Spinner animation='border' />
      ) : (
        <div className='book-page'>
          <div
            role='button'
            onClick={() => navigate(`/${category}`)}
            className='d-flex flex-row align-items-center'
          >
            <BackIcon />
            <h5 className='m-0 ms-2 fw-bold'>Back to browse</h5>
          </div>
          <Row className='mt-4 mt-md-5 df-flex justify-content-center align-items-center flex-column flex-md-row position-relative'>
            <Col xs={6} md={{ offset: 2, span: 3 }} className='mb-4 mb-md-0'>
              <img
                className='w-100 rounded-1'
                src={book?.cover_url}
                alt={book?.title}
              />
            </Col>
            <Col
              md={{ offset: 1 }}
              className='d-flex flex-column justify-content-center'
            >
              <h3 className='fw-bold'>{book?.title}</h3>
              <p>{book?.authors?.join(', ')}</p>
              <div className='d-flex flex-row align-items-center w-100 border-top border-bottom py-1'>
                <ClockIcon />
                <p className='m-0 ms-2'>
                  {Math.ceil(+book?.audio_length / 60).toString()} minutes
                </p>
              </div>
              <h5 className='fw-bold mt-4'>About this book</h5>
              <p>{book?.description}</p>
              <div className='position-absolute top-0 end-0'>
                <div className='btn' onClick={toggleBookmarkHandler}>
                  {bookmarkBooks.map(({ id }) => id).includes(book.id) ? (
                    <BookmarkOn />
                  ) : (
                    <BookmarkOff />
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <div className='w-100 border-top pt-3 d-flex flex-column align-items-center mt-4'>
            <h4 className='fw-bold'>What's inside?</h4>
            <Accordion data={book?.sections} />
          </div>
        </div>
      )}
    </Container>
  )
}

export default BookPage
