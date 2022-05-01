import React, { useState } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BookmarkContainer from '../BookmarkContainer/BookmarkContainer'
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {
  const [isDisplayed, setIsDisplayed] = useState(false)
  const toggleBookmarkHandler = () => {
    setIsDisplayed((prevState) => !prevState)
  }

  const lgScreen = useMediaQuery({ query: '(min-width: 992px)' })

  return (
    <Navbar bg='light' expand='lg'>
      <Container className='position-relative'>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>
            <img src='/logo.png' alt='sejutacita-logo' />
          </Navbar.Brand>
        </LinkContainer>
        <div onClick={toggleBookmarkHandler} className='ms-auto navbar-menu'>
          <div className='w-100 bookmark'>
            <div className='btn fw-bold w-100 bookmark__button'>
              {lgScreen ? '📕 Bookmark' : '📕'}
            </div>
            <BookmarkContainer isDisplayed={isDisplayed} />
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default NavBar
