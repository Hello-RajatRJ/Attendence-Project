import { configureStore } from '@reduxjs/toolkit'
import { useReducer } from 'react'
import userReducer from './AddUserSlice';
import adminReducer from './AddAdminSlice';

export const store = configureStore({
  reducer: {
         user:userReducer,
         admin:adminReducer

  },
})

