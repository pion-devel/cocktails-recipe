import React from 'react'

import { Card, Button } from 'react-bootstrap'

const Cocktail = ({image, name, id, glass, info}) => {
  return (
    <Card style={{ width: '25rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"> {glass}</Card.Subtitle>
    <Card.Text >
     {info}
    </Card.Text>
    <Button variant="primary" href={`/cocktail/${id}`}>Details</Button>
  </Card.Body>
</Card>
  )
}

export default Cocktail
