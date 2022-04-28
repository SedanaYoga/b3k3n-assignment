import axios from 'axios'

const getBooksUrl = (categoryId, size = 1000, page = 0) => {
  return `/fee-assessment-books?categoryId=${categoryId}&page=${page}&size=${size}`
}

export const getCategoriesData = async () => {
  try {
    const response = await axios.get('/fee-assessment-categories')
    console.log('Fetching Categories')
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const getBooksData = async (categoryId, size = 1000, page) => {
  try {
    const response = await axios.get(getBooksUrl(categoryId, size, page))
    console.log(`Fetching Books with Category: ${categoryId}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

export const removeSpecialChar = (text) => {
  return text.replace(/[ $#@%!&*()]/g, '').toLowerCase()
}

export const getBooksByPage = (books, currPage, shownBooks) => {
  const start = (currPage - 1) * shownBooks
  const end = shownBooks * currPage
  return books.slice(start, end)
}

export const getMaxPages = (books, bookToDisplay) => {
  return Math.ceil(books.length / bookToDisplay)
}

export const numberToShow = (currentPage, maxPages) => {
  if (currentPage === 1) {
    return [currentPage, currentPage + 1, currentPage + 2]
  } else if (currentPage === maxPages) {
    return [maxPages - 2, maxPages - 1, maxPages]
  } else {
    return [currentPage - 1, currentPage, currentPage + 1]
  }
}

export const searchBooksByQuery = (books, query) => {
  const keysToSearch = ['title', 'authors']
  const filteredBook = books.filter((book) =>
    keysToSearch.some((key) => {
      if (key === 'title') {
        return (
          book[key].toString().toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      } else if (key === 'authors') {
        return (
          book[key].join(' ').toLowerCase().indexOf(query.toLowerCase()) > -1
        )
      }
    })
  )
  return filteredBook
}
