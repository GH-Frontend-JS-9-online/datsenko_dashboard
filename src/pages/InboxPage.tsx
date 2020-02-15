import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import {asideMenuIcons} from '../services/ProjectContext'
import Aside from '../components/aside/Aside'
import InboxMenu from '../components/inbox-menu/InboxMenu'
import dashboardApiServices from '../services/DashboardServices'
import Inbox from "../components/inbox/Inbox";
import Coversation from "../components/coversation/Coversation";
import About from "../components/about/About";


const InboxPage:React.FC = () => {

    dashboardApiServices
        .allThreadMessages()
        .then(response => response.json())
        .then(response =>  localStorage.setItem('allThreadMessages', JSON.stringify(response)))
        .catch(err => console.error(err))

    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside asideMenuIcons={asideMenuIcons}/>
                <div className="middle">
                    <InboxMenu messagesItems={JSON.parse(localStorage.getItem('allThreadMessages') as string)}/>
                    <div className="message">
                        <Inbox/>
                        <Coversation/>
                        <About aboutItems={[JSON.parse(localStorage.getItem('user') as any)]}/>
                    </div>
                </div>

            </main>
        </div>
    )
}

export default InboxPage
