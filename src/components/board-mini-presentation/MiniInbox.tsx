import React from 'react'
import {useSelector} from 'react-redux'
import convertDate from "../../services/convertDate";

const MiniInbox = () => {
    const allThreadMessages = useSelector((state: any) => state.allThreadMessages)
    return (
        <>
            <div className="mini-inbox-header">
                Inbox(<span>{allThreadMessages.length}</span>)
            </div>
            <div className="mini-inbox-messages-wrapper">
                <div className="mini-inbox-messages">
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
                </div>
            </div>
        </>
    )
}

export default MiniInbox
