import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import Workflow from '../components/workflow/Workflow'

const HomePage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <Workflow/>
            </main>
        </div>
    )
}

export default HomePage
