import React from "react";


export const AddUserSlice =createSlice(
  {
    
    name:"user",
    initialdState:{
      user:{
        name:(innitialData) ? innitialData.name : null,
        email:(innitialData) ? innitialData.email : null,
        employeeCode:(innitialData) ? innitialData.employeeCode : null,
      },
      attendance:(attd)? attd:[],
      today:{}
    },
    reducers:{
      login: (state,action)=>{
        state.user=action.payload;
      },
      attendence: (state,action) => {
    state.attendance=action.payload;
      },
      today:(state,actions)=>{
        state.today=action.payload;
      }
    }
});
export const{login,attendance,today} = AddUserSlice.action;
export const selectLogin =(state)=>state.user.login;
export const selectAttendance =(state)=>state.user.attendance;
export const selectToday =(state)=>state.user.today;
export default AddUserSlice.reducer;