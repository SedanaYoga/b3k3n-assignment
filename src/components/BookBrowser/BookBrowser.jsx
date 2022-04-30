import React, { useEffect, useCallback } from 'react'
import { Col, Row } from 'react-bootstrap'
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
  }, [currentCategory])

  useEffect(() => {
    if (books[0]?.category_id !== currentCategory?.id) {
      getBookByCategory()
    }
    setPageAndShownBooks(1)
  }, [getBookByCategory, query])

  return (
    <div className='mt-5'>
      <div className='d-flex flex-row justify-content-between align-items-center'>
        <h1 className='fw-bold'>{currentCategory.name} Books</h1>
        <SearchComp />
      </div>

      <div className='mt-4'>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : queriedBooks.length === 0 ? (
          <h2 className='text-center p-5'>No Result found</h2>
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
