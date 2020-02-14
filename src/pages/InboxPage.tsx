import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import {asideMenuIcons, ProjectContext} from '../services/ProjectContext'
import Aside from '../components/aside/Aside'


const InboxPage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside asideMenuIcons={asideMenuIcons}/>
                <h1 style={{color: '#fff'}}>InboxPage</h1>
            </main>
        </div>
    )
}

export default InboxPage
