import React from 'react'
import styles from './BookmarkContainer.module.scss'
import { ReactComponent as RemoveBookmark } from '../../assets/trash-icon.svg'

const BookmarkContainer = ({ isDisplayed }) => {
  return (
    <div>
      <div
        style={{ visibility: `${isDisplayed ? 'visible' : 'hidden'}` }}
        className={styles.bookmarkContainer}
      >
        <div className={styles.bookmarkCard}>
          <img
            width='50px'
            src='https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png'
            alt='how i built this'
          />
          <div className={styles.bookmarkDetail}>
            <h5>The Little Book of Hygge</h5>
            <p>Career & Business</p>
          </div>
          <div>
            <RemoveBookmark />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookmarkContainer
