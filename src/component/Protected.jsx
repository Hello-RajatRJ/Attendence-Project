import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
    const {Component}=props;
    const navigate = useNavigate();
    useEffect(()=>{
        let login =localStorage.getItem('login');
        if(!login){
            return navigate('/')
        }
       if (login){
        navigate('/main')
       }
    },[]);

   
  return (
    <div>
<Component state={props.state}/>

    </div>
  )
}

export default Protected