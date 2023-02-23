import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

// const backendURL = 'https://redux-user-auth.up.railway.app'
const backendURL = 'https://auth.payhero.co.ke'
// const backendURL = 'http://127.0.0.1:5000'

export const userLogin = createAsyncThunk(
  // 'user/login',
  '/auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      // /api/user/login
      // /auth/login`,
      const data  = await axios.post(
        `${backendURL}/auth/login`,
        { username, password },
        config
      )
 console.log(data)
      // store user's token in local storage
      localStorage.setItem('user', data)

      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message)
      } else {
        return rejectWithValue(error.error_message)
      }
    }
  }
)
// activation start
export const activateUser = createAsyncThunk(
  // 'user/login',
  '/auth/user_account_activation',
  async ({ activation_code, username }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      
      const {data}  = await axios.post(
        `${backendURL}/auth/user_account_activation`,
        { activation_code, username},
        config
      )
console.log(data)
      // store user's token in local storage
      localStorage.setItem('activateUser', data)

      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message)
      } else {
        return rejectWithValue(error.error_message)
      }
    }
  }
)
// activation end

export const registerUser = createAsyncThunk(
  '/auth/users',
  // 'user/register',
 
  async ({ username, email, first_name, last_name, number,country_code, password, password_confirmation  }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      // /api/user/register
      await axios.post(
        `${backendURL}/auth/users`,
        { username, email, first_name, last_name, number,country_code, password, password_confirmation },
        config
      )
    } catch (error) {
      console.log(error.response.data.error_message)
      if (error.response && error.response.data.error_message) {
        return rejectWithValue(error.response.data.error_message)
      } else {
        return rejectWithValue(error.error_message)
      }
    }
  }
)
