import React, {useState} from 'react'
import './Authorization.scss'
import {IUser} from '../../interfaces/IUser'
import dashboardApiServices from '../../services/DashboardServices'


const SignUp:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [name, setName] = useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const namedHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setName(event.target.value)
    }

    const user:IUser = {
        email: email,
        password: password,
        name: name
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        dashboardApiServices
            .signUp(user)
            .then(response => response.json())
            .then()
            .catch(err => console.error(err))
        setEmail('')
        setPassword('')
        setName('')
    }
    return (
        <div className="container" id="container">
            <div className="view-container">
                <div className="view">
                    <div className="image"></div>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <form name="registerForm" onSubmit={handlerSubmit} className="form">
                    <h1>Sign up</h1>
                    <a href="#">Existing member?</a>
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
                    <input
                        onChange={namedHandler}
                        value={name}
                        type="text"
                        name="userName"
                        placeholder="Name..."
                        required
                    />
                    <button className="btn btn-login" type="submit">
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
