import React from 'react'
import { Navbar,Nav,Container,Button,Dropdown,Accordion} from 'react-bootstrap';
import './alluser.css'
import {NavLink}from 'react-router-dom';
import img from '../Assets/power-16.ico'
import { useState,useEffect } from 'react';
import axios from 'axios'
import img1 from '../Assets/trash.svg'





const AllUsers = () => {
  const [data,setData] = useState([0]);
  const [Addata,setAdData] = useState([]);
  const [state,setState]=useState()
  const [filter,setFilter]=useState()
  const [totalSum, setTotalSum] = useState();
  const [present,setPresent]=useState([])
  const [id,setId]=useState([])
  const [Present,setpresent]=useState([])
  const [absent,setAbsent]=useState([])
  let componentMounted = true




  useEffect(()=>{
  const getAdmin=async()=>{
    var resAD =await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/admin`)
    setAdData(resAD.data)
  }
  getAdmin();
},[]);



useEffect (()=>{
  const getAllUsers=async()=>{
    var res = await axios.get("https://62b99d7dff109cd1dc96a75d.mockapi.io/user");
    setData(res.data) 
setTotalSum(res.data.length)
    if(componentMounted){
      }
       return ()=>{
        componentMounted =false;
       }
    } 
    getAllUsers();
  },[])


  
  const filterProduct = async(cat)=>{
    const data= await axios.get('https://62b99d7dff109cd1dc96a75d.mockapi.io/user') 
    const updatedList = data.filter((x) => x.employeeCode && x.firstName === cat);
    
  };
const current = new Date();
const Tarik = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


function handleDelete(id){
  console.log("hello",id)
  data.map((ele)=>{
    if(ele.eid==id){
      console.log(ele,"ele")
    }
  })
const abc = async()=>{

  const response =await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/user/${id}`,)
  console.log(response.data)
  const softDelete =await axios.post(`https://62b99d7dff109cd1dc96a75d.mockapi.io/softDelete`,response.data)
   
  const deletData =await axios.delete(`https://62b99d7dff109cd1dc96a75d.mockapi.io/user/${id}`)
  
} 
abc();
}
useEffect(()=>{
  const getDeletedData=async()=>{
    const getDeleted=await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/softDelete`)
    // console.log(getDeleted.data.length)
    setState(getDeleted.data.length)
  }
  getDeletedData();
})


 

  // useEffect((signIn)=>{
  //   {data.map((ele)=>{
  //     console.log(ele.signIn)
  //    })}
  //   const getpresentuser=async()=>{
  //     const getpresent = await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/user`)
  // // console.log(getpresent.data)
 
  //   }
  //   getpresentuser();
  // })

  useEffect(()=>{
    const presentuser = async()=>{

      const SignIn =await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/Time`)
      // console.log(SignIn.data.length)
      setpresent(SignIn.data.length)

      
    }
    presentuser();
  })

  useEffect(()=>{

    const presentdata=async()=>{
      const predata=await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/Time`)
      setPresent(predata.data)      
      
    }
    presentdata();
  },[])
useEffect(()=>{
  const absentUser=async()=>{
    const Absent = totalSum-present.length;
    console.log(Absent)
    setAbsent(Absent)
    
  }
  absentUser();
},[])
        


  return (
    
    <div className="dry" style={{height:"auto",backgroundColor: "#B2D2EE"}}>
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
          All User Data
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            ></Nav>
            
            <NavLink className="stylen" to="/admin" onClick={()=>{localStorage.removeItem("loggingin")}} 
            style={{
                  marginLeft: "10px",
                  height: "40px",
                  marginTop: "10px",
                  marginBottom: "5px",
                  backgroundColor:"#198754",
                  borderRadius:"5px"
                }}> <img src={img} alt="" /> </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {Addata.map((ele,id)=>{
      return(

    <Container className="adminstyle"key={id}style={{width:"100%",height:"auto",marginTop:"25px",paddingTop:"8px"}}>
      <div className='d-flex'>
<h5 style={{marginRight:"300px",marginLeft:"15px"}}><h5 style={{fontSize:"20px",color:"white"}}>Admin : {ele.adminFirstName}</h5>{data.firstName}</h5>
      </div>
<h5 style={{marginRight:"320px",fontSize:"25px"}}><h5 style={{fontSize:"20px",color:"white"}}>EmployeeId : {ele.employeeCode}</h5>{data.employeeCode}</h5>
<h5 style={{fontSize:"20px"}}>Date : {Tarik}</h5>
</Container>
      )

    })}
    <div className='d-flex'>
  
    <Container
    
            className="record"
            style={{
             
              paddingTop:"10px",
              height:"240px",
              width: "240px",
              color:"black",
              fontFamily:"Arial, Helvetica, sans-serif",
              borderRadius: "10px",
              backgroundColor:"#778899",
            }}>
               <div style={{border:"2px solid White",height:"215px",borderRadius:"5px",backgroundColor:"#A5BECC"}}>

            <h5 style={{ textAlign:"center", marginBottom: "20px",fontSize:"30px",marginTop:"5px" }}>TotalUser</h5>
            <p style={{textAlign:"center",marginTop:"100px",fontWeight:"700",fontSize:"20px"}}>Users:{totalSum}</p>
               </div>
          </Container>
          


          <Container
            className="record"
            style={{
             
              paddingTop:"10px",
              height:"240px",
              width: "240px",
              color:"black",
              fontFamily:"Arial, Helvetica, sans-serif",
              borderRadius: "10px",
              backgroundColor:"#A5BECC",
            }}>
              <div style={{border:"2px solid White",height:"215px",borderRadius:"5px",backgroundColor:"#778899"}}>

            <h5 style={{ textAlign:"center", marginBottom: "20px",fontSize:"30px",marginTop:"5px" }}>PresentUser</h5>
            <p style={{textAlign:"center",marginTop:"100px",fontWeight:"700",fontSize:"20px"}}>Users:{Present}</p>
              </div>
          </Container>

          <Container
            className="record"
            style={{
              // border:"2px solid White",
              paddingTop:"10px",
              height:"240px",
              width: "240px",
              color:"black",
              fontFamily:"Arial, Helvetica, sans-serif",
              borderRadius: "10px",
              backgroundColor:"#778899",
            }}>
              <div style={{border:"2px solid White",height:"215px",borderRadius:"5px",backgroundColor:"#A5BECC"}}>

            <h5 style={{ textAlign:"center", marginBottom: "20px",fontSize:"30px",marginTop:"5px" }}>AbsentUser</h5>
            <p style={{textAlign:"center",marginTop:"100px",fontWeight:"700",fontSize:"20px"}}>Users:{absent}</p>
              </div>
          </Container>

          <Container
            className="record"
            style={{
              
              paddingTop:"10px",
              height:"240px",
              width: "240px",
              color:"black",
              fontFamily:"Arial, Helvetica, sans-serif",
              borderRadius: "10px",
              backgroundColor:"#A5BECC",
            }}
            >
               <div style={{border:"2px solid White",height:"215px",borderRadius:"5px",backgroundColor:"#778899"}}>
            <h5 style={{ textAlign:"center", marginBottom: "20px",fontSize:"30px",marginTop:"5px" }}>DeletedUser</h5>
            <p style={{textAlign:"center",marginTop:"100px",fontWeight:"700",fontSize:"20px"}}>Users:{state}</p>
               </div>
          </Container>
              </div>


              
 <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellspacing="0" width="90%">
  <tr>
  <div className='d-flex'>
     <h5 style={{marginLeft:"80px",color:"#3A3845"}}>TotalUsers</h5>

     <div className="form-outline"style={{marginLeft:"880px"}}>
    <input type="search"placeholder='Search' id="form1" className="form-control" />
  </div>
  </div>
  </tr>

     {data.map((element,itm)=>{
      return(

     <Accordion key={itm} style={{width:"90%",marginLeft:"70px",backgroundColor:"#F0EBE3",marginBottom:"20px",borderRadius:"20px"}}defaultActiveKey="0">
      <Accordion.Item style={{borderRadius:"20px"}} eventKey="0">
        <Accordion.Header style={{borderRadius:"20px"}} ><h5>{element.firstName}</h5>
        <h5 style={{marginLeft:"100px"}}>{element.employeeCode}</h5>
        <button className='button'onClick={()=>handleDelete(element.eid)} style={{marginLeft:"100px"}}><img  src={img1} alt="" /></button>
        </Accordion.Header>
         <Accordion.Body style={{borderRadius:"20px"}}>
    <div  className="userstyle" key={element.id}style={{width:"100%",height:"40px",paddingTop:"7px"}}>
<p style={{fontSize:"15px",marginRight:"50px"}}>Date : {element.date}</p>
<p style={{marginRight:"50px",fontSize:"15px"}} >SignInTime : {element.signIn}</p>
<p style={{marginRight:"50px",fontSize:"15px"}} >SignOutTime : {element.signOut} </p>
<p style={{marginRight:"50px",fontSize:"15px"}} >TotalHour:{element.totalHours}</p>
<NavLink to={`/element/${element.id}`}><a className='btn-btn dark'>TotalData</a></NavLink>
</div>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    )
})}
</table>


<h5 style={{ backgroundColor: "#778899", textAlign: "center",height:"auto",marginBottom:"-8px",padding:"8px" }}>
        Copyright © 2022 This Site Belongs to MR-RJ. All rights reserved.
      </h5> 

</div>

            
  )
}

export default AllUsers;