import React, { useEffect, useState } from 'react'
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { useMainContext } from '../../context/MainContext'

const SearchComp = () => {
  const {
    searchBooks,
    booksState: { query },
  } = useMainContext()
  const [queryInput, setQueryInput] = useState('')

  const changeQueryHandler = (e) => {
    const value = e.target.value
    setQueryInput(value)
  }
  const keyPressHandler = (e) => {
    if (e.key === 'Enter') {
      searchBooks(queryInput)
    }
  }
  useEffect(() => {
    setQueryInput(query)
  }, [query])
  return (
    <div className='p-3 pe-0'>
      <div className='search-box p-2 px-2'>
        <div>
          <SearchIcon />
        </div>
        <input
          type='text'
          placeholder='search title or author'
          onChange={changeQueryHandler}
          value={queryInput}
          onKeyUp={keyPressHandler}
        ></input>
      </div>
    </div>
  )
}

export default SearchComp
