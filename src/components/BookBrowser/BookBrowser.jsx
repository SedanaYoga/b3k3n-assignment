import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { getBooksData } from '../../utils/mainUtils'
import { useMainContext } from '../../context/MainContext'
import BookCard from '../../components/BookCard/BookCard'

const BookBrowser = () => {
  const {
    booksState,
    setBooks,
    categoriesState: { currentCategory },
  } = useMainContext()

  useEffect(() => {
    const getBookByCategory = async () => {
      try {
        const books = await getBooksData(currentCategory.id)
        setBooks(books)
      } catch (err) {
        console.log(err)
      }
    }
    getBookByCategory()
  }, [currentCategory])

  return (
    <div className='mt-5'>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <h1 className='fw-bold'>{currentCategory.name} Books</h1>
        <div className='p-3 pe-0'>
          <div className='search-box p-2 px-2'>
            <div>
              <SearchIcon />
            </div>
            <input type='text' placeholder='search title or author'></input>
          </div>
        </div>
      </div>

      <div className='mt-4'>
        <Row className='row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
          {booksState.books.map((book) => (
            <Col key={book.id} className='mb-4'>
              <BookCard book={book} category={currentCategory} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
}

export default BookBrowser
