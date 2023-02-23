import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Error from './Error'
import Spinner from './Spinner'
import { registerUser } from '../../features/auth/authActions'
import logo from './logo-image/logo.png'
const Register=()=> {
    const [customError, setCustomError] = useState(null)

    const { loading, userInfo, error, success } = useSelector(
      (state) => state.auth
    )
    const dispatch = useDispatch()
  
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    useEffect(() => {
        // redirect authenticated user to profile screen
        if (userInfo) navigate('/home')
        // redirect user to login page if registration was successful
        if (success) navigate('/activate')
      }, [navigate, userInfo, success])
    
      const submitForm = (data) => {
        // check if passwords match
        console.log(data)
        
        if (data.password !== data.password_confirmation) {
          setCustomError('Password mismatch')
          return
        }
        // transform email string to lowercase to avoid case sensitivity issues in login
        data.email = data.email.toLowerCase()
    
        dispatch(registerUser(data))
      }
    
    return (
    <div id="register" class="animate form">
    <form onSubmit={handleSubmit(submitForm)}>
    <center><img src={logo} alt=""  /></center> 
  <br /> 
        <p className='text-dark text-center'>WELCOME TO SWIFT PAYMENT SERVICE PORTAL!!</p>
        <br />
        <p className='text-dark text-center'>Sign up your account</p>
      {error && <Error>{error}</Error>}
      {customError && <Error>{customError}</Error>}
        <form class="row g-3">
 <div className="col-md-6">
        <label for="username" className="form-label">Username</label>
        <input type="text" 
        placeholder='username'
           className="form-control"
            {...register('username')}
            required
            />
        </div>
        <div className="col-md-6">
        <label for="email" className="form-label">Email</label>
        <input type="email" 
        placeholder='email'
            className="form-control"
            {...register('email')}
            required
            
         />
        </div>
        <div className="col-md-6">
        <label for="first_name" className="form-label">first_name</label>
        <input type="text" 
        placeholder='first name...'
            className="form-control"
            {...register('first_name')}
            required
            
         />
        </div>
        <div className="col-md-6">
        <label for="last_name" className="form-label">last_name</label>
        <input type="text" 
        placeholder='last name...'
            className="form-control"
            {...register('last_name')}
            required
            
         />
         </div>
        
      <div className="col-md-6">
        <label for="number" className="form-label">Phone Number</label>
        <input type="text" 
           className="form-control" 
           placeholder="Phone Number"
           {...register('number')}
           required
           
           
           />
        </div>
      <div className="col-md-6">
        <label for="number" className="form-label">Country code</label>
        <input type="number" 
           className="form-control" 
           placeholder="country_code"
           {...register('country_code')}
           required
           
           
           />
        </div>
        
        <div className="col-md-6">
        <label for="password" className="form-label">password</label>
        <input type="password" 
            className="form-control" 
            placeholder="password"
            {...register('password')}
            required
            
            />
        </div>
        <div className="col-md-6">
        <label for="password" className="form-label">password confirmation</label>
        <input type="password" 
            className="form-control" 
            placeholder="please confirm your password"
            {...register('password_confirmation')}
            required
            
            />
        </div>
      

        </form>
            {/* <p className="signin button"> <input type="submit" value="Sign Me up" /> </p> */}
            <button type='submit' className='login-button' disabled={loading}>
				{loading ? <Spinner /> : 'Sign Me up'}
				</button>
            <p className="change_link"> Already have an account ? <a href="#tologin" class="to_register"> Go and log in </a> </p>
            </form>
</div>
  )
}

export default Register