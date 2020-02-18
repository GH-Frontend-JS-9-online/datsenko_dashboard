import React, {useState} from 'react'
import './FormForMessage.scss'
import dashboardApiServices from '../../services/DashboardServices'
import store from '../../store/store'

const FormForMessage: React.FC = () => {
    const [message, setMessage] = useState('')

    const messageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()
        console.log(store.getState().allThreadMessages)
        if (message.trim() !== '') {
            dashboardApiServices
                .sendMessage(message)
                .then(response => response.json())
                .then(response => {
                    store.dispatch({type: 'UPDATE_MESSAGES', response})
                })
                .catch(error => console.error(error))
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
