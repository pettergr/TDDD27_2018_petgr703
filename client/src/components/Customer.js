import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from "semantic-ui-react";

const Customer = () => {
  return (
    <Container>
      <h1>Hej</h1>
      <Link to='/customers'>Back</Link>
    </Container>
  )
}

export default Customer
