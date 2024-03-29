import React from 'react';
import './LoginForm.css';
import Error from './ErrorAlter';
export default function LoginForm(props) {
    
    let {handlerSubmit, setEmail,setPassword, errorMessage,setError} = props.loginState
    return (
        <div className="col-sm-7 bg-color align-self-center">
            <div className='form-section'>
                <div className='title'>
                    <h2 className='bold2'>Sign in to your account</h2>
                </div>
                <div className='login-inner-form'>
                    <form method='POST' onSubmit={handlerSubmit}>
                        <div className='form-group form-box'>
                            <input type='text' id='email' onChange={e =>setEmail(e.target.value)}className='input-text' placeholder='Email Address'></input>
                            <i className='icon email'></i>
                        </div>

                        <div className='form-group form-box'>
                            <input type='password' id='password' onChange={e =>setPassword(e.target.value)} className='input-text' placeholder='Password'></input>
                            <i className='icon lock'></i>
                        </div>

                        <div className='form-group'>
                            <button className='btn primary-btn'>Login</button>
                        </div>

                        
                        {
                            errorMessage && <Error errorMessage={errorMessage} clearError={() =>setError(undefined)}></Error>
                        }

                    </form>
                </div>
            </div>
        </div>
    )
}
