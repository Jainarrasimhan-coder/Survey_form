import React,{useState} from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";
import { useDispatch} from "react-redux";

import "./question.css";
const Question4 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[data,setdata]=useState("")
  return (
    <Container className='mt-5 '>
      
      <Card>
    <Card.Header  className="text-center">Customer Survey</Card.Header>
    <Card.Body>
      <Card.Title className="text-end">4/5</Card.Title>
      <Card.Text className="text-center">
      4.   On a scale of 1-10 how would you recommend us to your friends and family?
      </Card.Text>
      <Col className='d-flex  justify-content-center'>
      <Button variant="outline-dark"className=" m-2"onClick={()=>{ setdata("1");console.log(data)}}>1</Button>
      <Button variant="outline-dark"className=" m-2  " onClick={()=>{ setdata("2");console.log(data)}}>2</Button>
      <Button variant="outline-dark"className="  m-2 "onClick={()=>{ setdata("3");console.log(data)}} >3</Button>
      <Button variant="outline-dark" className="  m-2 "onClick={()=>{ setdata("4");console.log(data)}} >4</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("5");console.log(data)}}>5</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("6");console.log(data)}}>6</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("7");console.log(data)}}>7</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("8");console.log(data)}}>8</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("9");console.log(data)}}>9</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("10");console.log(data)}}>10</Button>


      </Col >
      <Col className='d-flex  justify-content-evenly pt-5'>
        
        <Button variant="outline-primary"onClick={()=>{navigate('/3')}}>Previous</Button>
        <Button variant="outline-warning"onClick={()=>{navigate('/5')}}>skip</Button>
        <Button variant="outline-info"onClick={()=>{
        dispatch({
            type: "GET_USER",
            payload:{
                question_4:data
            }
          });
          navigate('/5')
    }}>Next</Button>
        
       

      </Col>
    </Card.Body>
  </Card>
         </Container>
  )
}

export default Question4