import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from '../../features/auth/authActions'
import { useEffect } from 'react'
import './auth.css';
import Error from './Error'
import Spinner from './Spinner'
import Register from './Register';
import logo from './logo-image/logo.png'

const Login = () => {
  const { loading, userInfo, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm()

  const navigate = useNavigate()

 
// useLayoutEffect(() => {
//   window.location.reload()
// }, [])


  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [navigate, userInfo])

  const submitForm = (data) => {
    dispatch(userLogin(data))
  }
	
return(
  <>

<p  class="hiddenanchor" id="toregister"></p>
  <p class="hiddenanchor" id="tologin"></p>
   <div id="wrapper">
	   <div id="login" className="animate form">
		   <form  onSubmit={handleSubmit(submitForm)}>
		 <center><img src={logo} alt=""  /></center> 
		 <br /> 
			   <p className='text-dark text-center'>WELCOME TO SWIFT PAYMENT SERVICE PORTAL!!</p>
			   <br />
			   <p className='text-dark text-center'>Sign in your account</p>
			   {error && <Error>{error}</Error>}
			   <img src="./logo-image/logo.png" alt="" srcset="" />

			   <p> <label For="username" class="uname" >username </label>
			   <br /> 
			   <input 
				  type="text"
				   placeholder="username"
					{...register('username')}
                    required
					
				  /> 
				 </p>
			   <p> <label For="password" class="youpasswd" >Password </label>
			    <input 
				 type='password'
				 className='form-input'
				 placeholder='password'
				 {...register('password')}
				 required
					/> 
					</p>
			   
			   <button type='submit' className='login-button' disabled={loading}>
				{loading ? <Spinner /> : 'Sign Me In'}
				</button>
			   <p class="change_link"> Don't have an account ?
				 <a href="#toregister" class="to_register">Sign me up</a> 
			   </p>
		   </form>
	   </div>
	<Register/>
   </div>
 

  </>);
};

export default Login;