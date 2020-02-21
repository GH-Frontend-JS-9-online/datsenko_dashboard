import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import InboxMenu from '../components/inbox-menu/InboxMenu'
import Inbox from '../components/inbox/Inbox'
import Coversation from '../components/coversation/Coversation'
import About from '../components/about/About'
import dashboardApiServices from '../services/DashboardServices'

const InboxPage: React.FC = () => {
    dashboardApiServices
        .allThreadMessages()
        .then(response => response.json())
        .then(response => localStorage.setItem('allThreadMessages', JSON.stringify(response)))
        .catch(err => console.error(err))
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <div className="middle">
                    <InboxMenu/>
                    <div className="message">
                        <Inbox/>
                        <Coversation/>
                        <About/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default InboxPage
