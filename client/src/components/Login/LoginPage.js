import './App.scss'
import { Outlet, Link } from "react-router-dom";
import LoginForm from '../Imports/LoginForm';
const LoginPage = () => {
    return (
        <body>
            <div id='login'>
                <div className='container'>
                    <div className='row d-flex justify-content-center login-box'>
                        <div className='col-lg-7 bg-color align-self-center'>
                            < LoginForm />
                        </div>
                    </div>
                </div>

            </div>

        </body>
    );
}


export default LoginPage;