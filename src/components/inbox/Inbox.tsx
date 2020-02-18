import React, {useContext} from 'react'
import './Inbox.scss'
import convertDate from '../../services/convertDate'
import {useSelector} from 'react-redux'

const Inbox: React.FC = () => {
    const allThreadMessages = useSelector((state: any) => state.allThreadMessages)
    return (
        <div className="inbox">
            {allThreadMessages.map((item: any, index: number) => {
                return (
                    <div key={index} className="messages">
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
