import React from 'react'
import { Accordion } from 'react-bootstrap'

const AccordionComponent = ({ data }) => {
  return (
    <div className='w-100 mb-5'>
      <Accordion>
        {data?.map((dat, index) => (
          <Accordion.Item key={index} eventKey={index}>
            <Accordion.Header className='accordion-header'>
              <h5 className='mb-0'>{dat.title}</h5>
            </Accordion.Header>
            <Accordion.Body>{dat.content}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  )
}

export default AccordionComponent
