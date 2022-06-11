import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";
import Figure from 'react-bootstrap/Figure'
const HomeScreen = () => {
    const navigate = useNavigate();
  return (
    <Container fluid  > <Card className="text-center">
    <Figure>
  <Figure.Image
  className='mt-3'
    width={900}
    height={150}
    alt="171x180"
    src="https://wallpaperaccess.com/full/3214373.jpg"
  />
 
</Figure>
    <Card.Body>
      <Card.Title>Customer Survey</Card.Title>
      <Card.Text>
        Your valuable time and review will help us to upgrade in a better way
      </Card.Text>
      <Button variant="primary" onClick={()=>{navigate('/1')}}>Go Questions</Button>
    </Card.Body>
 
  </Card>
    </Container>
  )
}

export default HomeScreen