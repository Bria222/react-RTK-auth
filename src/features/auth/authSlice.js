import { createSlice } from '@reduxjs/toolkit'
import { registerUser, userLogin,activateUser } from './authActions'

// initialize userToken from local storage
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

const initialState = {
  loading: false,
  userInfo: null,
  activateState: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.activateUser = false
      state.userToken = null
      state.error = null
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload
      state.activateState = payload
    },
  
  },
  extraReducers: {
    
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
      state.userInfo = payload
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },

     // activate user
     [activateUser.pending]: (state) => {
      state.loading = true
      state.error = null
      state.activateState = null
    },
    [activateUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // activation successful
      state.activateState = payload
      //  state.userToken = payload.userToken
    },
    [activateUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setCredentials } = authSlice.actions

export default authSlice.reducer
