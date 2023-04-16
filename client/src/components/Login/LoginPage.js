import './App.scss'
import { Outlet, Link } from "react-router-dom";
import LoginForm from '../Imports/LoginForm';
import BaseLogin from '../Imports/BaseLogin';
import React,{useState} from 'react'

import {useDispatch, useStore} from 'react-redux';
import { loginAction } from '../../container/actions';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setError] = useState("")

    const dispatch = useDispatch()
    const store = useStore()
    const history = useNavigate()
    //hander submit hadler function
    const handlerSubmit = (event) =>{
        event.preventDefault();

        const userCredential ={
            email,
            password
        }

        const userdata = { email, password}
        const login = dispatch(loginAction(userdata))
        login
            .then(data => history('/'))
            .catch(error => setError(error.err))
        //console.log(store.getState())
        //console.log(userCredential);
    }
    return (
        <body>
            <div id='login'>
                <div className='container'>
                    <div className='row d-flex justify-content-center login-box img-fluid'>
                        < BaseLogin />
                        < LoginForm loginState={{handlerSubmit, setEmail,setPassword,errorMessage,setError}}/> 
                    </div>
                </div>
            </div>
        </body>
    );
}


export default LoginPage;