import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BookmarkContainer from '../BookmarkContainer/BookmarkContainer'
import { useMainContext } from '../../context/MainContext'

const NavBar = () => {
  // const { toggleBookmarkContainer } = useMainContext()
  const [isDisplayed, setIsDisplayed] = useState(false)
  const toggleBookmarkHandler = () => {
    setIsDisplayed((prevState) => !prevState)
  }

  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand href='#home'>
            <img src='/logo.png' alt='sejutacita-logo' />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <div className='position-relative'>
              <div
                className='btn btn-greeny rounded-pill px-4 '
                onClick={toggleBookmarkHandler}
              >
                Bookmarks
              </div>
              <BookmarkContainer isDisplayed={isDisplayed} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
