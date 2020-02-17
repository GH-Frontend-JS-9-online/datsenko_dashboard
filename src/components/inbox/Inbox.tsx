import React, {useContext} from 'react'
import './Inbox.scss'
import {MessageContext} from '../../services/MessageContext'
import convertDate from '../../services/convertDate'

const Inbox: React.FC = () => {
    const {messages, updateMessages} = useContext(MessageContext)
    return (
        <div className="inbox">
            {[...messages].map(item => {
                return (
                    <div className="messages">
                        <div className="person">
                            <div>
                                <i className="fas fa-circle"></i>
                                <h2>{item.user['name']}</h2>
                            </div>
                            <span>{convertDate(item.created_at)} PM</span>
                        </div>
                        <p>
                            {item.body}
                        </p>
                    </div>
                )
            })}
            <div className="new-conversation">
                <div>
                    <button type="button" className="new-conversation__btn">
                        <i className="fas fa-plus"></i>
                        New coversation
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Inbox
