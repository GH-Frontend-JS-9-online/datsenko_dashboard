import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import {asideMenuIcons} from '../services/ProjectContext'
import Login from '../components/authorization/Login'

const AuthorizationPage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside asideMenuIcons={asideMenuIcons}/>
                <Login/>
            </main>
        </div>
    )
}

export default AuthorizationPage
