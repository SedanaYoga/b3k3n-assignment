import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getCategoriesData } from './utils/mainUtils'
import { useMainContext } from './context/MainContext'
import HomePage from './pages/HomePage/HomePage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  const { state, dispatch } = useMainContext()
  const { categoriesState } = state
  const { categoriesDispatch } = dispatch

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesData()
      categoriesDispatch({
        type: 'CATEGORIES_FETCH_SUCCESS',
        payload: categories,
      })
    }
    getCategories()
  }, [categoriesDispatch])

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/book/:id' element={<BookPage />} />
      </Routes>
    </>
  )
}

export default App
