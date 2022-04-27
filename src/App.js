import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useMainContext } from './context/MainContext'
import HomePage from './pages/HomePage/HomePage'
import BookPage from './pages/BookPage/BookPage'
import Navbar from './components/Navbar/Navbar'

function App() {
  const { getCategories, getAllBooks } = useMainContext()

  useEffect(() => {
    getCategories()
    getAllBooks()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/books/:category/:id' element={<BookPage />} />
      </Routes>
    </>
  )
}

export default App
