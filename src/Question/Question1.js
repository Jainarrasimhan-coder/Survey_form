import React,{useState} from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";

import "./question.css";
const Question1 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const[data,setdata]=useState("")

  return (
    <Container className='mt-5 '>
      
      <Card>
    <Card.Header  className="text-center">Customer Survey</Card.Header>
    <Card.Body>
      <Card.Title className="text-end">1/5</Card.Title>
      <Card.Text className="text-center">
      1.  How satisfied are you with our products?
      </Card.Text>
      <Col className='d-flex  justify-content-center'>
      <Button variant="outline-dark"className=" m-2 "  onClick={()=>{ setdata("1");console.log(data)}}>1</Button>
      <Button variant="outline-dark"className=" m-2"onClick={()=>{ setdata("2");console.log(data)}} >2</Button>
      <Button variant="outline-dark"className="  m-2" onClick={()=>{ setdata("3");console.log(data)}}>3</Button>
      <Button variant="outline-dark" className="  m-2"onClick={()=>{ setdata("4");console.log(data)}} >4</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("5");console.log(data)}}>5</Button>
      </Col >
      <Col className='d-flex  justify-content-evenly pt-5'>
        <Button variant="outline-warning"onClick={()=>{navigate('/2')}}>skip</Button>
        <Button variant="outline-info" onClick={()=>{
        dispatch({
            type: "GET_USER",
            payload:{
                question_1:data

            }
          });
          navigate('/2')
    }}>Next</Button>
        
       

      </Col>
    </Card.Body>
  </Card>
         </Container>
  )
}

export default Question1