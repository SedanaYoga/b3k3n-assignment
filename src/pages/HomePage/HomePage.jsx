import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import BookBrowser from '../../components/BookBrowser/BookBrowser'
import { useMainContext } from '../../context/MainContext'
import { useNavigate, useParams } from 'react-router-dom'
import { removeSpecialChar } from '../../utils/mainUtils'

const HomePage = () => {
  const { categoriesState, setCurrentCategory } = useMainContext()
  const [whichCategory, setWhichCategory] = useState({
    name: 'Happiness & Mindfulness',
    id: 1,
  })
  const navigate = useNavigate()

  const changeCatHandler = (id) => {
    const filteredCat = categoriesState.categories.find((cat) => cat.id === id)
    setWhichCategory(filteredCat)
    navigate(`/${removeSpecialChar(whichCategory.name)}`)
  }

  useEffect(() => {
    navigate(`/${removeSpecialChar(whichCategory.name)}`)
    setCurrentCategory(whichCategory)
  }, [whichCategory.name])

  return (
    <Container className='mt-5'>
      <ExploreCategory category={whichCategory} changeCat={changeCatHandler} />
      <BookBrowser category={whichCategory} changeCat={changeCatHandler} />
    </Container>
  )
}

export default HomePage
