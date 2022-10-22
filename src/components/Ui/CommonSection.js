import React from 'react'
import {Container} from 'reactstrap'

function CommonSection({title}) {
  return (
    <section className='common_section'>
      <Container className='txt_center'>
        <h1>{title}</h1>
      </Container>
    </section>
  )
}

export default CommonSection
