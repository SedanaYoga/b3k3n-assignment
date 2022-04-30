import React from 'react'
import { ReactComponent as PrevIcon } from '../../assets/previous-icon.svg'
import { ReactComponent as NextIcon } from '../../assets/next-icon.svg'
import { useMainContext } from '../../context/MainContext'
import { numberToShow } from '../../utils/mainUtils'

const PaginationComp = () => {
  const {
    paginationState: { currentPage, maxPages },
    setPageAndShownBooks,
  } = useMainContext()

  const changePage = (action) => {
    if (typeof action === 'string') {
      action === 'next'
        ? setPageAndShownBooks(currentPage + 1)
        : setPageAndShownBooks(currentPage - 1)
    } else {
      setPageAndShownBooks(action)
    }
  }

  return (
    <>
      {maxPages !== 0 && (
        <div
          className={` pagination-container w-100 d-flex flex-row justify-content-center align-items-center mb-5 gap-3`}
        >
          <div
            className={`next-pagination d-flex flex-row justify-content-center align-items-center ${
              currentPage === 1 ? 'disable-pagination' : 'active-pagination'
            }`}
            onClick={() => changePage('prev')}
          >
            <PrevIcon />
            <p>Prev</p>
          </div>
          <div
            className={`${
              maxPages === 1 ? 'invisible' : ''
            } d-flex page-num-pagination flex-row justify-content-center align-items-center gap-3 active-pagination`}
          >
            {numberToShow(currentPage, maxPages).map((num, index) => (
              <p
                role='button'
                className={currentPage === num ? 'active-number' : ''}
                key={index}
                onClick={() => changePage(num)}
              >
                {num}
              </p>
            ))}
          </div>
          <div
            className={`prev-pagination d-flex flex-row justify-content-center align-items-center ${
              currentPage === maxPages
                ? 'disable-pagination'
                : 'active-pagination'
            }`}
            onClick={() => changePage('next')}
          >
            <p>Next</p>
            <NextIcon />
          </div>
        </div>
      )}
    </>
  )
}

export default PaginationComp
