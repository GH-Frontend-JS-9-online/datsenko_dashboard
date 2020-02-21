import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'

const RaportPage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <h1 style={{color: '#fff'}}>RaportPage</h1>
            </main>
        </div>
    )
}

export default RaportPage
