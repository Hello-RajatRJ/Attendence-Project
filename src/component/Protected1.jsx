import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected1 = (props) => {
    const {Ad}=props;
    const navigate = useNavigate();
    useEffect(()=>{
        let loggingin =localStorage.getItem('loggingin');
        if(!loggingin){
            navigate('/admin')
        } 
        if (loggingin){
          navigate('/allusers')
         }
      },[]);
  
   
  return (
    <div>
<Ad/>

    </div>
  )
}

export default Protected1