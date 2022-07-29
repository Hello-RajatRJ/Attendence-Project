import React from "react";
import { Navbar, Nav, Footer, Button, Form, Container } from "react-bootstrap";
import { NavLink,useNavigate } from "react-router-dom";
import "../home.css";
import { useEffect,useState,useRef,useContext } from "react";
import axios from 'axios'

const Admin = () => {
  
  
  
    const employeeCodeRef = useRef();
    const errRef = useRef();
  
    const [employeeCode, setEmployeeCode] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [user, setUser] = useState([]);
    const navigate =useNavigate()
  
    useEffect(() => {
      employeeCodeRef.current.focus();
    }, []);
  
    useEffect(() => {
      setErrMsg("");
    }, [employeeCode, adminPassword]);
  
    const Navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      localStorage.setItem("loggingin", true);

      
    
      try {
        const users = await axios.get("https://62b99d7dff109cd1dc96a75d.mockapi.io/admin");
      
        const allUsers = users.data;
  
        console.log(allUsers);
        const usr = await allUsers.filter(
          (data) => data.employeeCode === employeeCode && data.adminPassword === adminPassword
          );
         
       
        console.log(usr);
        if (usr.length) return Navigate("/allusers");
        else alert("Id or Password Wrong");
         console.log(usr)
         if(usr.length)return Navigate("/allusers");
         else alert("please signup first")
       
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
         navigate('/allusers')
      }
    };
   const data = async () => {
      let response = await axios.get(
        "https://62b99d7dff109cd1dc96a75d.mockapi.io/user"
      );
      const loggingin = response.data;
      setUser(loggingin);
    };   
   
    

  return (
    <>
      <div className="dry" style={{height:"657px",backgroundColor: "rgb(178, 210, 238)"}}>
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
          </Container>
        </Navbar>

        <Form
        
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
          <h1 style={{ marginLeft: "35px", fontSize: "30px" }}>Admin Login</h1>
          <Form
            className="d-flex"
            style={{ width: "300px", marginLeft: "35px" }}
          >
            <Form.Control
              style={{ height: "40px", marginTop: "10px", marginBottom: "5px" }}
              type="search"
              Name="employeeCode"
              id="employeeCode"
              placeholder="EmployeeId"
              className="me-2"
              ref={employeeCodeRef}
              onChange={(e) => setEmployeeCode(e.target.value)}
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
              type="Password"
              name="adminPassword"
              placeholder="Password"
              className="me-2"
              onChange={(e) => setAdminPassword(e.target.value)}
                    value={adminPassword}
            />
          </Form>
          <NavLink  style={{textDecoration:"none",fontSize:"15px",float:"right",marginRight:"70px"}}to="/signup">ForgotPassword?</NavLink>

          <Button
          onClick={handleSubmit}
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
            LogIn
          </Button>
          <NavLink className="stylen"to="/adminsignup" style={{ marginLeft:"20px",position:"absolute",marginTop:"30px"}}>Signup</NavLink>
          
        </Form>
      </div>
    </>
  );
};

export default Admin;
