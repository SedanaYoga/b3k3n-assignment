import React, { useEffect, useCallback } from 'react'
import { Col, Row } from 'react-bootstrap'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { useMainContext } from '../../context/MainContext'
import BookCard from '../../components/BookCard/BookCard'
import PaginationComp from '../../components/PaginationComp/PaginationComp'

const BookBrowser = () => {
  const {
    booksState: { books, isLoading },
    getBooks,
    categoriesState: { currentCategory },
    loadingBooks,
    paginationState: { currentPage, currentBooks },
  } = useMainContext()

  const getBookByCategory = useCallback(async () => {
    try {
      loadingBooks()
      await getBooks(currentCategory.id)
    } catch (err) {
      console.log(err)
    }
  }, [currentCategory])

  useEffect(() => {
    if (books[0]?.category_id !== currentCategory?.id) {
      getBookByCategory()
    }
  }, [getBookByCategory])

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
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <Row className='row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1'>
            {currentBooks.map((book) => (
              <Col key={book.id} className='mb-4'>
                <BookCard book={book} category={currentCategory} />
              </Col>
            ))}
          </Row>
        )}
      </div>
      <PaginationComp />
    </div>
  )
}

export default BookBrowser
