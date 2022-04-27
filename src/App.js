import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useMainContext } from './context/MainContext'
import HomePage from './pages/HomePage/HomePage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  const { getCategories, getAllBooks, categoriesState, setCurrentCategory } =
    useMainContext()

  useEffect(() => {
    getCategories()
    getAllBooks()
    setCurrentCategory(categoriesState?.categories[0])
    console.log('Request from App.js')
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/:category' element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path='/:category/:id' element={<BookPage />} />
      </Routes>
    </>
  )
}

export default App
