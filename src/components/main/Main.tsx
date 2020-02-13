import React from 'react'
import './Main.scss'
import Aside from '../aside/Aside'
import Middle from '../middle/Middle'
import {IProjectsItem} from '../../interfaces/IProjectsItem'


const Main:React.FC<IProjectsItem> = props => {
    const asideMenuIcons: Array<string> = ['home', 'bars', 'chart-line', 'envelope', 'user-friends']
    return (
        <main className="main">
            <Aside asideMenuIcons={asideMenuIcons}/>
            <Middle projectsItems={props.projectsItems}/>
        </main>
    )
}

export default Main
