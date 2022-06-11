import React,{useEffect,useState} from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";

const LastScreen = () => {
  const[data,setdata]=useState();
  const navigate = useNavigate();

  
  useEffect(()=>{
    setTimeout(()=>{
      navigate('/')
    },5000)
  },[])
  return (
    <Container className=' mt-5'> <Card className="text-center">
        <Card.Img className='h-50'  src="https://sequencewiz.org/wp-content/uploads/2015/10/Thank-you-Image.png" />

    <Card.Body>
    
      <Card.Text>
Thanks for your time!!
      </Card.Text>
      
    </Card.Body>
    <Card.Footer className="text-muted">Have a good day!!</Card.Footer>
  </Card>
    </Container>
  )
}

export default LastScreen