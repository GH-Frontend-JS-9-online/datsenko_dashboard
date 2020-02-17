import React from 'react'
import './Coversation.scss'
import FormForMessage from '../form-for-message/FormForMessage'
import Messages from '../messages/Messages'

const Coversation:React.FC = () => {
    return (
        <div className="coversation">
            <Messages/>
            <FormForMessage/>
        </div>
    )
}

export default Coversation
