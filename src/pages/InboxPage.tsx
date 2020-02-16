import React, {useState} from 'react'
import AppHeader from '../components/app-header/AppHeader'
import {asideMenuIcons} from '../services/ProjectContext'
import Aside from '../components/aside/Aside'
import InboxMenu from '../components/inbox-menu/InboxMenu'
import dashboardApiServices from '../services/DashboardServices'
import Inbox from "../components/inbox/Inbox";
import Coversation from "../components/coversation/Coversation";
import About from "../components/about/About";
import {MessageContext} from '../services/MessageContext'

const InboxPage:React.FC = () => {
    const [messages, updateMessages] = useState([...JSON.parse(localStorage.getItem('allThreadMessages') as any)])
    dashboardApiServices
        .allThreadMessages()
        .then(response => response.json())
        .then(response =>  localStorage.setItem('allThreadMessages', JSON.stringify(response)))
        .catch(err => console.error(err))
    console.log(messages)
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside asideMenuIcons={asideMenuIcons}/>
                <div className="middle">
                    <MessageContext.Provider value={{messages, updateMessages}}>
                        <InboxMenu messagesItems={messages}/>
                        <div className="message">
                            <Inbox/>
                            <Coversation/>
                            <About aboutItems={[JSON.parse(localStorage.getItem('user') as any)]}/>
                        </div>
                    </MessageContext.Provider>

                </div>

            </main>
        </div>
    )
}

export default InboxPage
