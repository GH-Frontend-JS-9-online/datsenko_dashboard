import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import {asideMenuIcons} from '../services/ProjectContext'

const HomePage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside asideMenuIcons={asideMenuIcons}/>
                <h1 style={{color: '#fff'}}>HomePage</h1>
            </main>
        </div>
    )
}

export default HomePage
