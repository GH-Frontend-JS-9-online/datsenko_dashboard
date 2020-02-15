import React, {useState} from 'react'
import './Authorization.scss'
import {IUser} from '../../interfaces/IUser'
import dashboardApiServices from '../../services/DashboardServices'
import {NavLink} from 'react-router-dom'


const Login:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const user:IUser = {
        email: email,
        password: password
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        dashboardApiServices
            .login(user)
            .then(response => localStorage.setItem('token', response.headers.get('x-auth-token') as any))
            .catch(err => console.error(err))
        setEmail('')
        setPassword('')
    }

    return (
        <div className="container" id="container">
            <div className="view-container">
                <div className="view">
                    <div className="image"></div>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <form name="loginForm" onSubmit={handlerSubmit} className="form">
                    <h1>Log in</h1>
                    <NavLink to="/signup">Not a member?</NavLink>
                    <input
                        onChange={emailHandler}
                        value={email}
                        type="email"
                        name="userEmail"
                        placeholder="Email..."
                        required
                        autoComplete="off"
                    />
                    <input
                        onChange={passwordHandler}
                        value={password}
                        type="password"
                        name="userPassword"
                        placeholder="Password..."
                        required
                    />
                    <button className="btn btn-login" type="submit">
                        Log in
                    </button>
                    <NavLink to="/forgot">Forgot password?</NavLink>
                </form>
            </div>
        </div>
    )
}

export default Login
