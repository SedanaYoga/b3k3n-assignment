import React from 'react'
import { ReactComponent as PrevIcon } from '../../assets/previous-icon.svg'
import { ReactComponent as NextIcon } from '../../assets/next-icon.svg'

const PaginationComp = () => {
  return (
    <div className='w-100 d-flex flex-row justify-content-center align-items-center mb-5 gap-3'>
      <div
        role='button'
        className='d-flex flex-row justify-content-center align-items-center'
      >
        <PrevIcon />
        <p>Prev</p>
      </div>
      <div className='d-flex flex-row justify-content-center align-items-center gap-3'>
        <p role='button'>1</p>
        <p role='button'>2</p>
        <p role='button'>3</p>
      </div>
      <div
        role='button'
        className='d-flex flex-row justify-content-center align-items-center'
      >
        <p>Next</p>
        <NextIcon />
      </div>
    </div>
  )
}

export default PaginationComp
