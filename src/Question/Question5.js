import React,{useState,useEffect} from 'react'
import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate} from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";

import "./question.css";
const Question5 = () => {
    const navigate=useNavigate()
    const getDatafromLS=()=>{
        const data = localStorage.getItem('answers');
        if(data){
          const local=JSON.parse(data);
          return local
        }
        else{
          return []
        }
      }
    const[current,setcurrent]=useState({})
    

    const dispatch = useDispatch();
    const [enable,setenable]=useState(true)
    const[data,setdata]=useState("");
    const[localdb,setlocaldb]=useState(getDatafromLS())
let selector=useSelector((state)=>{
  return  state.user
});

// console.log(selector,"kkkkkkkk")
const final=()=>{
       window.alert("Are you sure to submit?")

    setcurrent(selector)
// console.log(array,"localllll")
console.log(current,"currentttttttt")
dispatch({
    type: "USER_COUNT",
 })
    setlocaldb([current,...localdb]);
    console.log(enable)
    setenable(false)

    

}
useEffect(()=>{
    localStorage.setItem('answers',JSON.stringify(localdb));

},[localdb])

  return (
    <Container className='mt-5 '>
      
      <Card>
    <Card.Header  className="text-center">Customer Survey</Card.Header>
    <Card.Body>
      <Card.Title className="text-end">5/5</Card.Title>
      <Card.Text className="text-center">
      5.  What could we do to improve our service?
      </Card.Text>
      <Col className='d-flex  justify-content-center'>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("1");console.log(data)}}>1</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("2");console.log(data)}} >2</Button>
      <Button variant="outline-dark"className="  m-2 "onClick={()=>{ setdata("3");console.log(data)}} >3</Button>
      <Button variant="outline-dark" className="  m-2 "onClick={()=>{ setdata("4");console.log(data)}} >4</Button>
      <Button variant="outline-dark"className=" m-2 "onClick={()=>{ setdata("5");console.log(data)}}>5</Button>

      </Col >
      <Col className='d-flex  justify-content-evenly pt-5'>
        
        <Button variant="outline-primary"onClick={()=>{navigate('/4')}}>Previous</Button>
        <Button variant="outline-warning"onClick={final}>Submit</Button>
      

      </Col>
    </Card.Body>
  </Card>
  <Button className='d-flex w-100 mt-5 justify-content-center'   variant="success" button disabled={enable}onClick={()=>{
            window.alert("Your message saved successfully")
            navigate('/last')
        }}>Finish</Button>
         </Container>
  )
}

export default Question5