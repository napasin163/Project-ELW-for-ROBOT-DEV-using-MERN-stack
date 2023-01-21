import React from 'react'
import './LoginForm.css'
export default function LoginForm(props) {
    return (
        <div className='form-section'>
            <div className='title'>
                <h2 className='bold2'>Sign in to your account</h2>
            </div>
            <div className='login-inner-form'>
                <form method='POST'>
                    <div className='form-group form-box'>
                        <input type='text' id='email' className='input-text' placeholder='Email Address'></input>
                        <i className='icon email'></i>
                    </div>

                    <div className='form-group form-box'>
                        <input type='text' id='password' className='input-text' placeholder='Password'></input>
                        <i className='icon lock'></i>
                    </div>

                    <div className='form-group'>
                        <button className='btn primary-btn'>Login</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
