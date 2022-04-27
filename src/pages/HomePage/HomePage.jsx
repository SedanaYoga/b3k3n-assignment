import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import BookBrowser from '../../components/BookBrowser/BookBrowser'
import { useMainContext } from '../../context/MainContext'

const HomePage = () => {
  const { categoriesState } = useMainContext()
  const [whichCategory, setWhichCategory] = useState({
    name: 'Happiness & Mindfulness',
    id: 1,
  })

  const changeCatHandler = (id) => {
    const filteredCat = categoriesState.categories.find((cat) => cat.id === id)
    setWhichCategory(filteredCat)
  }

  return (
    <Container className='mt-5'>
      <ExploreCategory category={whichCategory} changeCat={changeCatHandler} />
      <BookBrowser category={whichCategory} changeCat={changeCatHandler} />
    </Container>
  )
}

export default HomePage
