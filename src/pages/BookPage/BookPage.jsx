import React, { useCallback, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { ReactComponent as BackIcon } from '../../assets/back-icon.svg'
import { ReactComponent as ClockIcon } from '../../assets/clock-alarm.svg'
import { ReactComponent as BookmarkOff } from '../../assets/bookmark-off.svg'
import { useMainContext } from '../../context/MainContext'
import Accordion from '../../components/Accordion/Accordion'
import { removeSpecialChar } from '../../utils/mainUtils'

const BookPage = () => {
  const { category, id } = useParams()
  const [book, setBook] = useState({})
  const {
    booksState,
    categoriesState: { categories },
    getBooks,
    setCurrentCategory,
  } = useMainContext()
  const navigate = useNavigate()

  const getBookFromContext = useCallback(async () => {
    const paramsCategory = categories.find(
      (cat) => removeSpecialChar(cat.name) === category
    )
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
    }
  }, [booksState.books, id])

  useEffect(() => {
    getBookFromContext()
    console.log('Context Request from BookPage.jsx')
  }, [getBookFromContext])

  return (
    <Container className='mt-3'>
      <div
        role='button'
        onClick={() => navigate(`/${category}`)}
        className='d-flex flex-row align-items-center'
      >
        <BackIcon />
        <p className='m-0 ms-2 fw-bold'>Back to browse</p>
      </div>
      <Row className='mt-5'>
        <Col>
          <Row>
            <Col className='w-100 offset-4 col-8'>
              <img
                className='w-50 rounded-1'
                src={book?.cover_url}
                alt={book?.title}
              />
            </Col>
          </Row>
        </Col>
        <Col className='d-flex flex-column justify-content-center position-relative'>
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
            <BookmarkOff />
          </div>
        </Col>
      </Row>
      <div className='w-100 border-top pt-3 d-flex flex-column align-items-center mt-4'>
        <h4 className='fw-bold'>What's inside?</h4>
        <Accordion data={book?.sections} />
      </div>
    </Container>
  )
}

export default BookPage
