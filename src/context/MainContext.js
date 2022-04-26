import { createContext, useContext } from 'react'
import { useCategoryReducer } from '../reducers/categoriesReducer'
import { useBookReducer } from '../reducers/booksReducer'

const MainContext = createContext()

export const useMainContext = () => useContext(MainContext)

const MainContextProvider = ({ children }) => {
  const [booksState, booksDispatch] = useBookReducer()
  const [categoriesState, categoriesDispatch] = useCategoryReducer()

  const state = { booksState, categoriesState }
  const dispatch = { booksDispatch, categoriesDispatch }
  const value = { state, dispatch }

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>
}

export default MainContextProvider
