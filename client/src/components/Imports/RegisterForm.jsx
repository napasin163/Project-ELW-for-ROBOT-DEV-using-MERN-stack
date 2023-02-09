import React from 'react'
import './LoginForm.css'
export default function RegisterForm(props) {

    let { 
        handlerSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck
    } = props.registerState;


  return (
    <div className='col-sm-7 bg-color align-self-center'>
        <div className="form-section">
            <div className="title">
                <h2 className='bold2'>Create a new account</h2>
            </div>
            <div className="login-inner-form">
                <form method="POST" onSubmit={handlerSubmit}>

                    <div className="form-group form-box">
                        <input type="text" id="username" onChange={e => setUsername(e.target.value)} className="input-text" placeholder="Username" />
                        <i className="icon user"></i>
                    </div>

                    <div className="form-group form-box">
                        <input type="text" id="email" onChange={e => setEmail(e.target.value)} className="input-text" placeholder="Email Address" />
                        <i className="icon email"></i>
                    </div>

                    <div className="form-group form-box">
                        <input type="text" id="password" onChange={e => setPassword(e.target.value)} className="input-text" placeholder="Password" />
                        <i className="icon lock"></i>
                    </div>
                    
                    <div className="form-group form-box">
                        <input type="text" id="passwordCheck" onChange={e => setPasswordCheck(e.target.value)} className="input-text" placeholder="Verify Password" />
                        <i className="icon lock"></i>
                    </div>

                    <div className="form-group">
                        <button className="btn primary-btn">
                            Register
                        </button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}
