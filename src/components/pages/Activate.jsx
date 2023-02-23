import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './activate.css';
import Error from '../auth/Error'
import Spinner from '../auth/Spinner'
import { activateUser } from '../../features/auth/authActions'
import { resetCredentials } from '../../features/auth/authSlice';
import { useLayoutEffect } from 'react';

const Activate = () => {
  const { loading, activateState, error} = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

//   redirect activated user to login
  
  
 useEffect(() => {
   console.log('useeffect was called') 
    if (activateState != null) {

      navigate('/login')
    }
  }, [activateState]);

  const submitForm = (data) => {
    dispatch(activateUser(data))
  }
	
return(
  <>
  <div className="row text-info">
	<div className="col">
	<section> 
 
 <p  class="hiddenanchor" id="toregister"></p>
  <p class="hiddenanchor" id="tologin"></p>
   <div id="wrapper">
	   <div id="login" className="animate form">
		   <form  onSubmit={handleSubmit(submitForm)}>
		  
		 <br /> 
			   <p className='text-dark text-center'>WELCOME TO SWIFT PAYMENT SERVICE PORTAL!!</p>
			   <br />
			   <p className='text-dark text-center'>Activate account account</p>
			   {error && <Error>{error}</Error>}
			   

			   <p> <label For="activation_code" class="uname" >activation_code </label>
			   <br /> 
			   <input 
				  type="text"
				   placeholder="activation_code"
					{...register('activation_code')}
                    required
					
				  /> 
				 </p>
			   <p> <label For="username" class="youpasswd" >Username </label>
			    <input 
				 type='text'
				 className='form-input'
				 placeholder='username'
				 {...register('username')}
				 required
					/> 
					</p>
			   
			  
			   <button type='submit' className='login-button' disabled={loading}>
				{loading ? <Spinner /> : 'Activate'}
				</button>
			   
		   </form>
	   </div>
	
   </div>
</section>
	</div>
	
  </div>
  

  </>);
};

export default Activate;