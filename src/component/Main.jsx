import React from "react";
import { Navbar, Nav, Footer, Button, Form, Container,Accordion } from "react-bootstrap";
import { useEffect, useState, useRef } from "react";
import {useParams ,NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Calendar from "react-calendar";
import "./alluser.css";
import "react-calendar/dist/Calendar.css";
import img from "../Assets/power-16.ico";
import CardHolidays from "./Apps/CardHolidays";
import Clock from 'react-live-clock';

const Main = (props) => {

  const [Date1, setDate] = useState(new Date());
  let [counter, setCounter] = useState(0);
  let [isActive, setIsActive] = useState(false);
  const[data ,setData]=useState([])
  const [state,setState]=useState([])
  const [item,setItem]=useState([])
  const [times,setTimes] =useState([])
  const [outTime,setOutTime]=useState([])
  const [inTime,setInTime]=useState([])
 
  let time = Date.now(true);
  const [present,setpresent]=useState([])
  

  const current = new Date();
  const Tarik = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;


  let componentMounted = true
  const [ed,seted]=useState()
  useEffect(()=>{
const getSingleUser=async(e)=>{

  setState(props.state);
    const hello =JSON.parse(sessionStorage.getItem("usr"))
    setData(hello);
    
    
 
}


getSingleUser();
},[]);



  useEffect(() => {
    axios.get("https://62b99d7dff109cd1dc96a75d.mockapi.io/user",
      (res, err) => {
        setCounter(time.res[0].signIn / 1000);
        setIsActive(true);
      
      }
    );
  }, []);
  const d = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];
  let day = weekDay[d.getDate()];
  let date = d.toUTCString().slice(5, 16);
  
 
  useEffect(()=>{
    const today= new Date();

    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
 
    setTimes(time)
   
  },[])
 
 

  
function hii(eid) {
  data.map((ele)=>{
    if(ele.id==eid){
      console.log(ele,"ele")
    }
  })
 
  if (!isActive) {
    localStorage.setItem("SignIn",true)
    axios.post(`https://62b99d7dff109cd1dc96a75d.mockapi.io/Time`, {
      eid,
      status: 'W',
      signIn: time,
      date:date,
    },(res,err)=>{
    }
    
    );
    alert('SignIn Successfully')
  }else if(isActive){
    axios.put(`https://62b99d7dff109cd1dc96a75d.mockapi.io/Time/${eid}`,{
      signOut: time
    })

  }
  
}
 

useEffect(()=>{
  

  const presentdata=async()=>{
    const pdata=await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/Time`)
    const SameUser= pdata.data;
    {SameUser.map((elle)=>{
      setItem(elle.eid)
      var date = new Date(elle.signIn);
      var outDate = new Date(elle.signOut);
      const OutTime = outDate.getHours() + ':' + outDate.getMinutes() + ':' + outDate.getSeconds();
      const nowtime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
     
      localStorage.setItem(`now`,JSON.stringify(nowtime))
   const nowT =   JSON.parse(localStorage.getItem("now"))
      setInTime(nowT)
      setOutTime(OutTime)
      setpresent(pdata.data)
    })}
  }
  
  presentdata();
},[])



function refreshPage() {
  window.location.reload(false);
}
      





    return (
      
      <div className="dry"style={{ backgroundColor: "rgb(178, 210, 238)" ,backgroundImage:"co" }}>
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
              Attendence
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
                ></Nav>
              <NavLink
                className="stylen"
                to="/"
                onClick={() => {localStorage.removeItem("login");}}
                style={{
                  marginLeft: "10px",
                  height: "40px",
                  marginTop: "10px",
                  marginBottom: "5px",
                  backgroundColor: "#198754",
                  borderRadius: "5px",
                }}
                  
                >
                {" "}
                <img src={img} alt="" />{" "}
              </NavLink>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {data.map((elem,itm)=>{
          return(
            
            <Container
            key={itm}
            className="adminstyle"
            style={{
              width: "100%",
              height: "50px",
              marginTop: "30px",
              marginBottom: "1px",
              paddingTop: "13px",
            }}
            >
          <h5
            style={{
              marginRight: "280px",
              marginLeft: "15px",
             
              
            }}
            >
            {" "}
            Employee : {elem.firstName}
          </h5>
          <h5 style={{ marginRight: "320px"}}>
            Employee : {elem.employeeCode}
          </h5>
          <h5>Date : {Tarik}</h5>
        </Container>
   )
  })} 
        <div className="d-flex" style={{ marginTop: "-40px",marginRight:"100px" }}>
          <Container
          className="calstyle"
          style={{
            width: "50%",
            backgroundColor:"#778899",
            borderRadius: "5px",
            padding: "20px 10px ",
          }}
          >
            <h1 style={{ textAlign: "center" }}>Calendar</h1>
            <div style={{ marginTop: "15px",width:"580px",marginLeft:"15px" }}>
              <div
                className="calendar-container"
                style={{
                  backgroundColor: "rgb(178, 210, 238)",
                  borderRadius: "15px",
                  height: "auto",
                }}
                >
                <Calendar
                  className="react-calender"
                  onChange={setDate}
                  value={Date1}
                  />
              </div>
              <br />
              <div className="text-center" style={{ paddingTop: "5px" }}>
                Selected date: {Date1.toDateString()}
              </div>
            </div>
          </Container>
          <div className="d-block">

          <Container
            className="record"
            style={{
              paddingTop:"40px",
              width: "340px",
              height:"350px",
              borderRadius: "10px",
              backgroundColor:"lightslategray",
              marginBottom:"-60px"
            }}
            >
              {/* {Htime.map((elem,itm)=>{ */}
            <p
            // key={itm}
              style={{
                fontSize: "25px",
                fontWeight: "40px",
                textAlign:"center",
                marginBottom: "20px",
                paddingTop: "40px",
                border:"2px solid white",
                borderRadius:"5px"
              }}>{date}</p>
              
            {/* })}  */}
              <h1 style={{ marginLeft: "70px", marginBottom: "20px" }}>{day}</h1>
              
            <p
            
              style={{
                
                marginBottom: "30px",
                textAlign:"center",
                fontSize: "25px",
                border:"2px solid white",
                borderRadius:"5px"
              }}> <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/kolkata'} /></p>
               {data.map((elem,itm)=>{
          return(

            <Button
            key={itm}
            
              onClick={async() => {await setIsActive(!isActive); hii(elem.eid) }}
              style={{ marginLeft:"8px", width: "300px" }}
              className="sibut"
              >
              {!isActive ?"SignIn" : "SignOut"}
              
            </Button>
              )
            })} 
          </Container>
          <Container 
          className="record"
            style={{
              height:"350px",
              borderRadius: "10px",
              backgroundColor:"#A5BECC",
                   width: "350px",
         paddingTop:"15px"
            }}>
              <CardHolidays />
        </Container>

        </div>
          </div>
        
          
      {present.map((element,itm)=>{
        return(
          <Accordion key={itm}style={{width:"90%",marginLeft:"70px",marginBottom:"100px"}}defaultActiveKey="0">
      <Accordion.Item style={{borderRadius:"20px 20px 0px 0px"}} eventKey="0">
        <Accordion.Header style={{borderRadius:"20px 20px 0px 0px"}}><h5>{element.firstName}</h5><h5 style={{marginLeft:"100px"}}>{element.employeeCode}</h5></Accordion.Header>
        <Accordion.Body >
        <div  className="userstyle" style={{width:"100%",height:"40px",paddingTop:"7px"}}>
    <p style={{fontSize:"15px",marginRight:"50px"}}>Date : {element.date} </p>
    <p style={{marginRight:"50px",fontSize:"15px"}} >SignInTime :{inTime} </p>
    <p style={{marginRight:"50px",fontSize:"15px"}} >SignOutTime : {outTime} </p>
    <p style={{marginRight:"50px",fontSize:"15px"}} >TotalHour:{element.totaHour}</p>
    </div>
        </Accordion.Body>
      </Accordion.Item>
    
    </Accordion>
      )
      })} 

<h5 style={{ backgroundColor: "#778899", textAlign: "center",marginBottom:"-8px",padding:"8px"  }}>
        Copyright © 2022 This Site Belongs to MR-RJ. All rights reserved.
      </h5> 
      </div>
    
    );
    
  };

export default Main;
