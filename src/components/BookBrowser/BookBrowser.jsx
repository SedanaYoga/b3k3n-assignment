import React, { useEffect, useCallback } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import { useMainContext } from '../../context/MainContext'
import BookCard from '../../components/BookCard/BookCard'
import PaginationComp from '../../components/PaginationComp/PaginationComp'
import SearchComp from '../../components/SearchComp/SearchComp'

const BookBrowser = () => {
  const {
    booksState: { books, query, isLoading, queriedBooks },
    getBooks,
    categoriesState: { currentCategory },
    loadingBooks,
    setPageAndShownBooks,
    paginationState: { currentBooks },
  } = useMainContext()

  const getBookByCategory = useCallback(async () => {
    try {
      loadingBooks()
      await getBooks(currentCategory.id)
    } catch (err) {
      console.log(err)
    }
  }, [currentCategory.id])

  useEffect(() => {
    if (books[0]?.category_id !== currentCategory?.id) {
      getBookByCategory()
    }
    setPageAndShownBooks(1)
  }, [getBookByCategory, query])

  return (
    <div className='mt-5'>
      <div className='d-flex flex-lg-row flex-column justify-content-between align-items-center text-gfold-start text-center'>
        <h1 className='fw-bold'>{currentCategory.name} Books</h1>
        <SearchComp />
      </div>

      <div className='mt-4 position-relative'>
        {isLoading ? (
          <Spinner animation='border' />
        ) : queriedBooks.length === 0 ? (
          <h2 className='text-center p-5'>No Result found</h2>
        ) : (
          <Row className='row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-2'>
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
