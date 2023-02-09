import React,{ useState } from 'react'
import './App.scss'
import { useDispatch } from 'react-redux';
import BaseLogin from '../Imports/BaseLogin';
import RegisterForm from '../Imports/RegisterForm';
import { registerAction } from '../../container/actions';
import{ useNavigate } from 'react-router-dom';
export default function Register() {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const dispatch = useDispatch()
    const history = useNavigate()
    // on form submit click handler
    const handlerSubmit = (event) =>{
        event.preventDefault();

        const newUser = {
            username,
            email,
            password,
            passwordCheck   
        }
        const user = { username: "admin", email:"admin@gmail.com", password:"admin123", passwordCheck:"admin123"}
        const validate = dispatch(registerAction(user));
        validate
            .then(data => {
                //console.log(data)
                history('/loginpage')
            })
            .catch(error => console.log(error))
        //console.log(newUser);
    }

    let registerData ={
        handlerSubmit,
        setUsername,
        setEmail,
        setPassword,
        setPasswordCheck
    }

    return (
        <body>
            <div id='login'>
                <div className='container'>
                    <div className='row d-flex justify-content-center login-box'>
                        < BaseLogin />
                        < RegisterForm registerState = {registerData}/>
                    </div>
                </div>
            </div>
        </body>
    )
}
