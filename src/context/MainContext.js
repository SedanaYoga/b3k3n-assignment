import { createContext, useContext } from 'react'
import { useCategoryReducer } from '../reducers/categoriesReducer'
import { useBookReducer } from '../reducers/booksReducer'
import { getBooksData, getCategoriesData } from '../utils/mainUtils'

const MainContext = createContext()

export const useMainContext = () => useContext(MainContext)

const MainContextProvider = ({ children }) => {
  const [booksState, booksDispatch] = useBookReducer()
  const [categoriesState, categoriesDispatch] = useCategoryReducer()

  const state = { booksState, categoriesState }
  const dispatch = {
    booksDispatch,
    categoriesDispatch,
    getCategories: async () => {
      const categories = await getCategoriesData()
      categoriesDispatch({
        type: 'CATEGORIES_FETCH_SUCCESS',
        payload: categories,
      })
    },
    getAllBooks: async () => {
      const books = await getBooksData(1)
      booksDispatch({ type: 'BOOKS_FETCH_SUCCESS', payload: books })
    },
  }
  const value = { ...state, ...dispatch }

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
