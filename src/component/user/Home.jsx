import React from "react";
import { Navbar, Nav, Footer, Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../home.css";
import { useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
// import setState from '../../App'
const Home = (props) => {
  
  const employeeCodeRef = useRef();
  const errRef = useRef();
  
  const [employeeCode, setEmployeeCode] = useState("");
  const [password, setpassword] = useState("");
  const [id,setid] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate()
  const [user, setUser] = useState([]);

  
  useEffect(() => {
    employeeCodeRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [employeeCode, password]);

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem("login", true);
   
    try {
      const users = await axios.get(
        "https://62b99d7dff109cd1dc96a75d.mockapi.io/user"
      );
      const allUsers = users.data;
      const usr = await allUsers.filter(
        (data) => data.employeeCode === employeeCode && data.password === password
        );
      

        sessionStorage.setItem("usr",JSON.stringify(usr))
   
        // console.log(usr)
        props.setState(usr);
      if (usr.length) return Navigate("/main");
      else alert("Username or Password Wrong");
      console.log(usr);
      if (usr.length) return Navigate("/main");
      else alert("please signup first");
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Id or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
      return navigate("/main");
    
    }
    
  };

  const data = async () => {
    let response = await axios.get(
      "https://62b99d7dff109cd1dc96a75d.mockapi.io/user"
    );
    const login = response.data;
    setUser(login);
  };
  return (
   
   

    <>
    
      <div
        className="dry"
        style={{ backgroundColor: "rgb(178, 210, 238)",height:"657px" }}
      >
        
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



        {/* <OneId.Provider value={pass}> */}

  

        <Form
          style={{
            marginLeft: "500px",
            marginTop: "100px",
            fontSize: "25px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            width: "400px",
            height: "auto",
            paddingTop: "24px",
            backgroundColor: "white",
            borderRadius: "10px",
            paddingBottom: "20px",
          }}
          >
          <h1 style={{ marginLeft: "35px", fontSize: "30px" }}>Login</h1>
          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
            >
            <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
              type="search"
              Name="employeeCode"
              id="employeeCode"
              placeholder="Employee ID"
              className="me-2"
              ref={employeeCodeRef}
              onChange ={(e) => setEmployeeCode(e.target.value)}
              value={employeeCode}
              />
          </Form>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
            >
            {errMsg}
          </p>

          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
            >
            <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
              type="password"
              name="password"
              placeholder="Password"
              className="me-2"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              />
          </Form>
          <NavLink
            style={{
              textDecoration: "none",
              fontSize: "15px",
              float: "right",
              marginRight: "70px",
            }}
            to="/signup"
            >
            Forgot Password?
          </NavLink>

          <Button
            onClick={handleSubmit}
            className="button"
            type="submit"
            variant="outline-success"
            style={{
              marginLeft: "35px",
              height: "40px",
              marginTop: "30px",
              marginBottom: "5px",
              width: "85px",
            }}
            >
            Login
          </Button>
          <NavLink
            className="stylen"
            to="/signup"
            style={{
              marginLeft: "20px",
              position: "absolute",
              marginTop: "30px",}}>SignUp</NavLink>
        </Form>
              {/* </OneId.Provider> */}
        
      </div>

      </>
     
  );
};

export default Home;

// import { useState, useEffect } from "react";
// import { useNavigate} from "react-router-dom"
// import { NavLink } from "react-router-dom";
// import {Container,Navbar,Nav,Button,Form} from 'react-bootstrap'
// import axios from "axios";


// import "../signup.css";

// function SignUp1() {
//   const initialValues = {   employeeCode:"",password:"" };
//   const [user, setUser] = useState(initialValues);
//   const [userErrors, setUserErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
  

//   const newInput = (e) => {
//     const { name, value } = e.target;
//     setUser({ ...user, [name]: value });
//     setUserErrors(initialValues)
//   }
  
//   const submitData = async(e) => {
//     const data = localStorage.setItem("data",JSON.stringify(user));
//   // const items = JSON.parse(localStorage.getItem('data'));
//   const items1 = JSON.parse(localStorage.getItem('data'));
//     // console.log(items);
//   console.log(items1);
//     e.preventDefault();
//     setUserErrors(validate(user));
//     setIsSubmit(true);
//     const resp = await axios.post('http://10.8.10.95/api/user/login.php',items1 );
//     console.log(resp.data)
    
//     setUser(resp.data)
// };

//   const Navigate = useNavigate()
//   useEffect(() => {
//     if (Object.keys(userErrors).length === 0 && isSubmit) {
//       Navigate('/');

//     }
//   }, [userErrors]);
//   const validate = (values) => {
//     const errors = {};
//     // const Nregex = /^[a-zA-Z'-'s]{1,40}$/i;
//     const empRegex =/^\d{4}$/
   
   
   
//     // if (!values.firstName) {
//     //     errors.firstName = "FirstName is required!";
//     //   } else if (!Nregex.test(values.firstName)) {
//     //     errors.firstName = "FirstName should use only words!";
//     //   }
//     //   if (!values.lastName) {
//     //     errors.lastName = "lastName is required";
//     //   } else if (!Nregex.test(values.lastName)) {
//     //     errors.lastName = "lastName should use only words";
//     //   }
//       // if (!values.employeeCode) {
//       //   errors.employeeCode = "empCode is required";
//       // } else if (!empRegex.test(values.employeeCode)) {
//       //   errors.employeeCode = "allow only 4 digits";
//       // }
      

//     return errors;
//   };
 
 
 

  

// //   const data = async () => {
    
// //     console.log(resp.data);
  
// // }

// const datafound =() =>{
 
//   // data()


//   ;}
  
//   return (
    
//     <>
//     <div style={{height:"625px",backgroundColor: "rgb(178, 210, 238)"}}>

//      <Navbar
//           className="back"
//           collapseOnSelect
//           expand="lg"
//           bg="dark"
//           variant="dark"
//           >
//           <Container fluid>
//             <Navbar.Brand
//               href="#"
//               style={{ fontFamily: "sans-serif", fontSize: "25px" }}
//               >
//               User Login
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: "100px" }}
//                 navbarScroll
//                 ></Nav>
//               <Button
//                 className="button"
//                 type="submit"
//                 variant="outline-success"
//                 style={{
//                     marginLeft: "10px",
//                     height: "40px",
//                     marginTop: "10px",
//                     marginBottom: "5px",
//                 }}
//                 >
//                 ?
//               </Button>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>
  
//         <div className="stapper">
//           <NavLink className="styleN" activeClassName="active" to="/signup">
//             Page1
//           </NavLink>
//           <NavLink className="styleN" activeClassName="active" to="/signup1">
//             Page2
//           </NavLink>
       
//         </div>
   
//         <Form 
//           onSubmit={submitData}
//           style={{
//             marginLeft: "500px",
//             marginTop: "100px",
//             fontSize: "25px",
//             boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
//             width: "400px",
//             height: "auto",
//             paddingTop: "24px",
//             backgroundColor:"white",
//             borderRadius:"10px",
//           }}
//         >
//           <h1 style={{ marginLeft: "35px", fontSize: "30px" }}>Signup</h1>
//           <Form
//             className="d-flex"
//             style={{ width: "300px", marginLeft: "35px" }}
//           >
//             <Form.Control
//               style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
//               type="password"
//               Name="password"
//               id="password"
//               placeholder="password"
//               className="me-2"
//               onChange={newInput}
        
//             />
//           </Form>
     
         

         
//           <Form
//             className="d-flex"
//             style={{ width: "300px", marginLeft: "35px" }}
//           >
//             <Form.Control
//               style={{ height: "40px", marginTop: "10px" }}
//               type="text"
//               name="employeeCode"
//               placeholder="employeeCode"
//               className="me-2"
//               onChange={newInput}
              
//             />
//           </Form>
//           <p style={{color:"red",fontSize:"10px",marginLeft:"35px"}}>{userErrors.employeeCode}</p>
       
//           <Button 
//           // onClick={()=>{datafound()}}
//             className="button"
//             type="submit"
//             variant="outline-success"
//             style={{
//               marginLeft: "35px",
//               height: "40px",
//               marginTop: "30px",
//               marginBottom: "20px",
//             }}
//           >
//             Save And Exit to login Page
//           </Button>
          
          
//         </Form>
//               </div>
            
//               </>
//   );
// }


// export default SignUp1;