import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Container,Navbar,Nav,Button,Form} from 'react-bootstrap'
import axios from "axios";


import "../signup.css";

function SignUp1() {
  const initialValues = {   firstName: "",lastName:"",employeeCode:"" };
  const [user, setUser] = useState(initialValues);
  const [userErrors, setUserErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setUserErrors(initialValues)
  }
  
  const submitData = async(e) => {
    const data= sessionStorage.setItem("data1",JSON.stringify(user));
  const items = JSON.parse(sessionStorage.getItem('data'));
  const items1 = JSON.parse(sessionStorage.getItem('data1'));
    console.log(items);
  console.log(items1);
  const itm ={...items,...items1}
    e.preventDefault();
    setUserErrors(validate(user));
    setIsSubmit(true);
    const resp = await axios.post('https://62b99d7dff109cd1dc96a75d.mockapi.io/user',itm );
    
    console.log(data)
};

  const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate('/');

    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
    const Nregex = /^[a-zA-Z'-'s]{1,40}$/i;
    const empRegex =/^\d{4}$/
   
   
   
    if (!values.firstName) {
        errors.firstName = "FirstName is required!";
      } else if (!Nregex.test(values.firstName)) {
        errors.firstName = "FirstName should use only words!";
      }
      if (!values.lastName) {
        errors.lastName = "lastName is required";
      } else if (!Nregex.test(values.lastName)) {
        errors.lastName = "lastName should use only words";
      }
      if (!values.employeeCode) {
        errors.employeeCode = "empCode is required";
      } else if (!empRegex.test(values.employeeCode)) {
        errors.employeeCode = "allow only 4 digits";
      }
      

    return errors;
  };
 
 
 

  

//   const data = async () => {
    
//     console.log(resp.data);
  
// }

const datafound =() =>{
  console.log("data found")
  // data()


  ;}
  
  return (
    
    <>
    <div style={{height:"625px",backgroundColor: "rgb(178, 210, 238)"}}>

     <Navbar
          className="back"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          >
          <Container fluid>
            <Navbar.Brand
              href="#"
              style={{ fontFamily: "sans-serif", fontSize: "25px" }}
              >
              User Login
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
                ></Nav>
              <Button
                className="button"
                type="submit"
                variant="outline-success"
                style={{
                    marginLeft: "10px",
                    height: "40px",
                    marginTop: "10px",
                    marginBottom: "5px",
                }}
                >
                ?
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <div className="stapper">
          <NavLink className="styleN" activeClassName="active" to="/signup">
            Page1
          </NavLink>
          <NavLink className="styleN" activeClassName="active" to="/signup1">
            Page2
          </NavLink>
       
        </div>
   
        <Form 
          onSubmit={submitData}
          style={{
            marginLeft: "500px",
            marginTop: "100px",
            fontSize: "25px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "400px",
            height: "auto",
            paddingTop: "24px",
            backgroundColor:"white",
            borderRadius:"10px",
          }}
        >
          <h1 style={{ marginLeft: "35px", fontSize: "30px" }}>Signup</h1>
          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
            <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
              type="search"
              Name="firstName"
              id="firstName"
              placeholder="First Name"
              className="me-2"
              onChange={newInput}
        
            />
          </Form>
          <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.firstName}</p>
         

          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
            <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
              type="search"
              name="lastName"
              placeholder="LastName"
              className="me-2"
              onChange={newInput}
              
            />
          </Form>
          <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.lastName}</p>

          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
            <Form.Control
              style={{ height: "40px", marginTop: "10px" }}
              type="text"
              name="employeeCode"
              placeholder="employeeCode"
              className="me-2"
              onChange={newInput}
              
            />
          </Form>
          <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.employeeCode}</p>
       
          <Button 
          onClick={()=>{datafound()}}
            className="button"
            type="submit"
            variant="outline-success"
            style={{
              marginLeft: "35px",
              height: "40px",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            Save And Exit to login Page
          </Button>
          
          
        </Form>
              </div>
            
              </>
  );
}


export default SignUp1;