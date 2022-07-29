import { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Container,Form,Button,Nav,Navbar} from 'react-bootstrap'

import "../signup.css";

function AdminSignUp() {
  const initialValues = {  adminEmail: "", adminPassword: "",adminConfirmPassword:"" };
  const [user, setUser] = useState(initialValues);
  const [userErrors, setUserErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const newInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setUserErrors(initialValues)
  }

  const submitData = (e) => {
    e.preventDefault();
    setUserErrors(validate(user));
    setIsSubmit(true);
   
const data= sessionStorage.setItem("data",JSON.stringify(user));

    console.log(data)
 

  };
const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate('/adminSignUp1');

    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const preregex = /^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   
    if (!values.adminEmail) {
      errors.adminEmail = "Email is required!";
    } else if (!regex.test(values.adminEmail)) {
      errors.adminEmail = "This is not a valid email format!";
    }
    if (!values.adminPassword) {
      errors.adminPassword = "Password is required";
    }else if(!preregex.test(values.adminPassword)){
      errors.adminPassword="Password should be atleast one Upper case and one Special character or a Number"
    }
    
    if (!values.adminConfirmPassword) {
      errors.adminConfirmPassword = "ConfirmPassword is required";
    }
    else if(values.adminConfirmPassword !== values.adminPassword)
    {
      errors.adminConfirmPassword="Password doesn't match"
  }

    return errors;
  };
  
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
               Admin Login
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
           </Container>         </Navbar>
  
           <div className="stapper">
          <NavLink className="styleN" activeClassName="active" to="/adminsignup">
            Page1
          </NavLink>
          <NavLink className="styleN" activeClassName="active" to="/adminsignup1">
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
               Name="adminEmail"
               id="email"
               placeholder="Email"
               className="me-2"
               onChange={newInput}
        
             />
           </Form>
             <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.adminEmail}</p>
         

           <Form
             className="d-flex"
             style={{ width: "300px", marginLeft: "35px" }}
           >
             <Form.Control
               style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
               type="password"
               name="adminPassword"
               placeholder="Password"
               className="me-2"
               onChange={newInput}
              
             />
           </Form>
           <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.adminPassword}</p>
           <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
             <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}               type="password"
              name="adminConfirmPassword"
              placeholder="CoPassword"
              values="xxxxxxx"
              onChange={newInput}
              
            />
          </Form>
          <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.adminConfirmPassword}</p>
       
           <Button 
        
             className="button"
             type="submit"
            variant="outline-success"
            style={{
              marginLeft: "35px",
               height: "40px",             marginTop: "30px",
              marginBottom: "20px",
              
            }}
          >
            Next
          </Button>
          
                   </Form>
              </div>
    </>
  );
}


export default AdminSignUp;