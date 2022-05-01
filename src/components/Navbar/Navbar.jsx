import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import BookmarkContainer from '../BookmarkContainer/BookmarkContainer'

const NavBar = () => {
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
          <Nav className='ms-auto navbar-menu'>
            <div className='position-relative w-100 bookmark'>
              <div
                className='btn btn-greeny rounded-pill w-100 px-4 bookmark__button'
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
