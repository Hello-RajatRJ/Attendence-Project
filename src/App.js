import Home from './component/user/Home'
import Admin from './component/admin/Admin';
import SignUp from './component/user/SignUp'
import {Routes,Route} from 'react-router-dom'
import './app.css'
import Main from './component/Main';
import SignUp1 from './component/user/SignUp1';
import AdminSignUp from './component/admin/AdminSignup';
import AdminSignUp1 from './component/admin/AdminSignup1';
import AllUsers from './component/AllUsers';
import Protected from './component/Protected';
import Protected1 from './component/Protected1';
import { useEffect, useState } from 'react';
import DeletedUser from './component/DeletedUser';
function FourOfour(){
  return <h1 style={{color: "black"}}>404 Not Found</h1>
  
}
function App(props) {                                                               
  const [state,setState]=useState();
  useEffect(()=>{
    // console.log(state);
  },[state])
  return (
  <>
  <Routes className="div">
    <Route path="/" element={<Home setState={setState}/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/main" element={<Protected state={state} Component={Main}/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/signup1" element={<SignUp1/>}/>
    <Route path="/adminsignup" element={<AdminSignUp/>}/>
    <Route path="/adminsignup1" element={<AdminSignUp1/>}/>
    <Route path="/deleteduser" element={<DeletedUser/>}/>
  <Route path="/allusers" element={<Protected1 Ad={AllUsers}/>}/>
    <Route path="*" element={<FourOfour/>}/>
 

  </Routes>

  </>
  );
}

export default App;
