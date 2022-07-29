import React from 'react'
import { useState,useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom';

  import axios from 'axios'

const SingleUser = () => {
    const {id}= useParams();
    const [singleData,setSingleData]=useState();
    
useEffect(()=>{
    const getSingleUser = async ()=>{
        const res = await axios.get(`https://62b99d7dff109cd1dc96a75d.mockapi.io/user/${id}`)
        console.log("id",res.id);
        setSingleData(res.data);
    }
    getSingleUser();
},[])


const ShowUser = ()=>{
    return(
        <>
       
       {singleData.map((element,id)=>{
  return(

  
    <div  className="userstyle" key={id.id}style={{width:"100%",height:"40px",paddingTop:"7px"}}>
<p style={{fontSize:"15px",marginRight:"50px"}}>Date : {id.date}</p>
<user style={{marginRight:"50px",marginLeft:"5px",fontSize:"15px"}}> Employee : {id.firstName}</user>
<p style={{marginRight:"50px",fontSize:"15px"}}>EmployeeId : {id.employeeCode} </p>
<p style={{marginRight:"50px",fontSize:"15px"}} >SignInTime : {id.signIn}</p>
<p style={{marginRight:"50px",fontSize:"15px"}} >SignOutTime : {id.signOut} </p>
<p style={{marginRight:"50px",fontSize:"15px"}} >TotalHour:{id.totalHours}</p>
</div>
    
    )
})}
          
        </>
    )
}
  return (
    <>


    <div>
        <div className="container">
            <div className="row">
                {<ShowUser/>}
            </div>
        </div>

    </div>
    </>
  )
}

export default SingleUser