import { useRef,Link, useState } from 'react';
import './login.css';

const Login = () => {
  const [login,setLogin]=useState();
    const emailInputRef=useRef();
    const passwordInputRef=useRef();
    
    const submitHandler=()=>{
       setLogin((prev)=>!prev)
    }
    const switchHandler=()=>{
        setLogin((prev)=>!prev)
    }

  return (
    <section className='auth'>
    <h1>{login ? 'Login' : 'Sign Up'}</h1>
    <form onSubmit={submitHandler}>
      <div className='control'>
        <label htmlFor='email'><b>Your Email</b></label>
        <input type='email' id='email' required ref={emailInputRef}></input>
      </div>
      <div className='control'>
         <label htmlFor='password'><b>Your Password</b></label>
         <input type='password' id='password' required ref={passwordInputRef}></input>
      </div><br/>
      <b className='forgot'>Forgot Password?</b>
      <div className='actions'>
        <button>{login ? 'login' : 'create new login'}</button>
       </div>
      {login && (
          <p>
            don't have an account ?{" "}
            <button className="" onClick={switchHandler}>
              Sign Up
            </button>
          </p>
        )}
        {!login && (
          <p>
            have an account ?
            <button className="" onClick={switchHandler}>
              Sign In
            </button>
          </p>
        )}
    </form>
  </section>
  )
}

export default Login

