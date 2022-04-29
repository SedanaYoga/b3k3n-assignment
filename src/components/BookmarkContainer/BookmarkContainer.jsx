import React from 'react'
import styles from './BookmarkContainer.module.scss'
import { ReactComponent as RemoveBookmark } from '../../assets/trash-icon.svg'
import { useMainContext } from '../../context/MainContext'
import { useNavigate } from 'react-router-dom'
import { removeSpecialChar } from '../../utils/mainUtils'

const BookmarkContainer = ({ isDisplayed }) => {
  const navigate = useNavigate()
  const {
    bookmarkState: { bookmarkBooks },
    categoriesState: { categories },
    removeBookmark,
  } = useMainContext()

  const goToSelectedBookmark = (bookmark) =>
    navigate(
      `/${removeSpecialChar(
        categories.find((cat) => cat.id === bookmark.category_id).name
      )}/${bookmark.id}`
    )

  const removeBookmarkFromModal = (bookmark) => {
    removeBookmark(bookmark.id)
  }

  return (
    <div>
      <div
        style={{ visibility: `${isDisplayed ? 'visible' : 'hidden'}` }}
        className={styles.bookmarkContainer}
      >
        {bookmarkBooks.length === 0 ? (
          <div className='d-flex justify-content-center align-item-center p-3'>
            <h5 className='m-0'>No books found</h5>
          </div>
        ) : (
          bookmarkBooks.map((bookmark) => (
            <div
              role='button'
              key={bookmark.id}
              className={styles.bookmarkCard}
              onClick={() => goToSelectedBookmark(bookmark)}
            >
              <img
                width='50px'
                src={bookmark.cover_url}
                alt='how i built this'
              />
              <div className={styles.bookmarkDetail}>
                <h5>{bookmark.title}</h5>
                <p>
                  {
                    categories.find((cat) => cat.id === bookmark.category_id)
                      .name
                  }
                </p>
              </div>
              <div
                onClick={(e) => {
                  e.stopPropagation()
                  removeBookmarkFromModal(bookmark)
                }}
              >
                <RemoveBookmark />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default BookmarkContainer
