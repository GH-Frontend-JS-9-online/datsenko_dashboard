import React, {useState} from 'react'
import './Authorization.scss'
import {IUser} from '../../interfaces/IUser'
import dashboardApiServices from '../../services/DashboardServices'

const Forgot:React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmationPassword, setConfirmationPassword] = useState<string>('')

    const emailHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setEmail(event.target.value)
    }

    const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setPassword(event.target.value)
    }

    const confirmationPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>):void => {
        setConfirmationPassword(event.target.value)
    }

    const user:IUser = {
        email: email,
        password: password,
        confirmationPassword: confirmationPassword
    }

    const handlerSubmit = (event: React.FormEvent<HTMLFormElement>):void => {
        event.preventDefault()
        dashboardApiServices
            .resetPassword(user)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err))
        setEmail('')
        setPassword('')
        setConfirmationPassword('')
    }


    return (
        <div className="container" id="container">
            <div className="view-container">
                <div className="view">
                    <div className="image"></div>
                </div>
            </div>
            <div className="form-container sign-in-container">
                <form name="resetForm" className="form">
                    <h1>Reset password</h1>
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
                        onChange={confirmationPasswordHandler}
                        value={confirmationPassword}
                        type="password"
                        name="userConfirmPassword"
                        placeholder="Confirm password..."
                        required
                    />
                    <button className="btn btn-login" type="submit">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Forgot
