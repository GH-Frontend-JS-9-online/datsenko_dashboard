import React from 'react'
import './Main.scss'
import Aside from '../aside/Aside'
import Middle from '../middle/Middle'

const Main:React.FC = () => {
    return (
        <main className="main">
            <Aside/>
            <Middle/>
        </main>
    )
}

export default Main
