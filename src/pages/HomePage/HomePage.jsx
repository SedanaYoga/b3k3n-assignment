import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import BookBrowser from '../../components/BookBrowser/BookBrowser'
import { useMainContext } from '../../context/MainContext'
import { useNavigate } from 'react-router-dom'
import { removeSpecialChar } from '../../utils/mainUtils'

const HomePage = () => {
  const {
    categoriesState: { categories, currentCategory },
    setCurrentCategory,
    setPageAndShownBooks,
    paginationState: { currentPage },
  } = useMainContext()
  const navigate = useNavigate()

  const changeCatHandler = (id) => {
    const filteredCat = categories.find((cat) => cat.id === id)
    setCurrentCategory(filteredCat)
    navigate(`/${removeSpecialChar(currentCategory.name)}`)
  }

  useEffect(() => {
    setPageAndShownBooks(currentPage)
    navigate(`/${removeSpecialChar(currentCategory.name)}`)
  }, [currentCategory.name, navigate])

  return (
    <Container className='mt-5 px-gfold-4 px-ipse-4 px-4 home-page'>
      <ExploreCategory changeCat={changeCatHandler} />
      <BookBrowser changeCat={changeCatHandler} />
    </Container>
  )
}

export default HomePage
