import React, {useState} from 'react'
import './FormForMessage.scss'
import dashboardApiServices from '../../services/DashboardServices'
import {useDispatch} from 'react-redux'
import {updateMessages} from '../../reducers/reducers'

const FormForMessage: React.FC = () => {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        if (message.trim() !== '') {
            dashboardApiServices
                .sendMessage(message)
                .then(response => response.json())
                .then(response => {
                    localStorage.setItem('allThreadMessages', JSON.stringify([...localStorage.getItem('allThreadMessages') as any, response]))
                    dispatch(updateMessages(response))
                })
                .catch(error => console.error(error))
            dashboardApiServices
                .getAllProjects()
                .then(response => response.json())
                .then(response => localStorage.setItem('projects', JSON.stringify(response)))
                .catch(err => console.error(err))
            setMessage('')
        }
    }

    return (
        <form action="#" onSubmit={handleSubmit} className="write-message">
            <input type="text" onChange={messageHandler} value={message} name="write-message__text"
                   placeholder="Write a message" required pattern=".*\S.*" autoComplete="off"/>
            <button type="submit" className="write-message__btn">
                <i className="fas fa-paperclip"></i>
            </button>
        </form>
    )
}

export default FormForMessage
