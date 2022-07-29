import { useState, useEffect,useRef } from "react";
import { useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";
import {Container,Form,Button,Nav,Navbar} from 'react-bootstrap'
import bcrypt from 'bcryptjs'

import "../signup.css";

function SignUp() {
  const initialValues = {  email: "", password: "",confirmPassword:"" };
  const password = useRef()
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
    const password1=password.current.value
    const hashedPassword = bcrypt.hashSync(password1, '$2a$10$CwTycUXWue0Thq9StjUM0u')
    console.log(hashedPassword)
    setUserErrors(validate(user));
    setIsSubmit(true);
   
const data= sessionStorage.setItem("data",JSON.stringify(user));

    // console.log(data)
 

  };
const Navigate = useNavigate()
  useEffect(() => {
    if (Object.keys(userErrors).length === 0 && isSubmit) {
      Navigate('/SignUp1');

    }
  }, [userErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const preregex = /^(?=.*[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }else if(!preregex.test(values.password)){
      errors.password="Password should be atleast one Upper case and one Special character or a Number"
    }
    
    if (!values.confirmPassword) {
      errors.confirmPassword = "ConfirmPassword is required";
    }
    else if(values.confirmPassword !== values.password)
    {
      errors.confirmPassword="Password doesn't match"
  }

    return errors;
  };
  
  return (
    <>
     <div style={{height:"657px",backgroundColor: "rgb(178, 210, 238)"}}>
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
           </Container>         </Navbar>


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
               Name="email"
               id="email"
               placeholder="Email"
               className="me-2"
               onChange={newInput}
        
             />
           </Form>
             <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.email}</p>
         

           <Form
             className="d-flex"
             style={{ width: "300px", marginLeft: "35px" }}
           >
             <Form.Control
             ref={password}
               style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
               type="password"
               name="password"
               placeholder="Password"
               className="me-2"
               onChange={newInput}
              
             />
           </Form>
           <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.password}</p>
           <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
             <Form.Control
               ref={password}
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}               type="password"
              name="confirmPassword"
              placeholder="CoPassword"
              values="xxxxxxx"
              onChange={newInput}
              
            />
          </Form>
          <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.confirmPassword}</p>
       
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


export default SignUp;