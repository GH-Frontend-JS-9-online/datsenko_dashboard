import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'

const NotFoundPage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <h1 style={{color: '#fff'}}>Error 404</h1>
            </main>
        </div>
    )
}

export default NotFoundPage
