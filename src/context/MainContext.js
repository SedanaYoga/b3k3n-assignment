import { createContext, useContext } from 'react'
import { useCategoryReducer } from '../reducers/categoriesReducer'
import { useBookReducer } from '../reducers/booksReducer'
import { usePaginationReducer } from '../reducers/paginationReducer'
import {
  getBooksByPage,
  getBooksData,
  getCategoriesData,
  getMaxPages,
} from '../utils/mainUtils'

const MainContext = createContext()

export const useMainContext = () => useContext(MainContext)

const MainContextProvider = ({ children }) => {
  const [booksState, booksDispatch] = useBookReducer()
  const [categoriesState, categoriesDispatch] = useCategoryReducer()
  const [paginationState, paginationDispatch] = usePaginationReducer()

  const { currentPage, bookToDisplay, maxPages } = paginationState

  const state = { booksState, categoriesState, paginationState }
  const dispatch = {
    loadingCategories: () => {
      categoriesDispatch({
        type: 'CATEGORIES_FETCH_LOADING',
      })
    },
    getCategories: async () => {
      const categories = await getCategoriesData()
      categoriesDispatch({
        type: 'CATEGORIES_FETCH_SUCCESS',
        payload: categories,
      })
    },
    setCurrentCategory: (category) => {
      categoriesDispatch({
        type: 'CURRENTCATEGORY_FETCH_SUCCESS',
        payload: category,
      })
    },
    loadingBooks: () => {
      booksDispatch({
        type: 'BOOKS_FETCH_LOADING',
      })
    },
    getBooks: async (categoryId = 1, size = 1000) => {
      const books = await getBooksData(categoryId, size)
      booksDispatch({ type: 'BOOKS_FETCH_SUCCESS', payload: books })
      paginationDispatch({
        type: 'PAGINATION_SET_SUCCESS',
        books: getBooksByPage(books, currentPage, bookToDisplay),
        maxPages: getMaxPages(books, bookToDisplay),
        page: 1,
      })
    },
    setPageAndShownBooks: (page) => {
      paginationDispatch({
        type: 'PAGINATION_SET_SUCCESS',
        page: page,
        books: getBooksByPage(booksState.books, page, bookToDisplay),
        maxPages: maxPages,
      })
    },
    setBooks: (books) => {
      booksDispatch({ type: 'BOOKS_FETCH_SUCCESS', payload: books })
    },
    setPage: (currentPage) => {
      paginationDispatch({
        type: 'PAGINATION_SET_SUCCESS',
        payload: currentPage,
      })
    },
  }
  const value = { ...state, ...dispatch }

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
