import React from 'react'
import { Container } from 'react-bootstrap'
import ExploreCategory from '../../components/ExploreCategory/ExploreCategory'
import BookBrowser from '../../components/BookBrowser/BookBrowser'

const HomePage = () => {
  return (
    <Container className='mt-5'>
      <ExploreCategory />
      <BookBrowser />
    </Container>
  )
}

export default HomePage
