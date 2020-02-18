import React from 'react'
import './Main.scss'
import Aside from '../aside/Aside'
import Middle from '../middle/Middle'
import {IProjectsItem} from '../../interfaces/IProjectsItem'
import {asideMenuIcons} from '../../services/ProjectContext'

const Main:React.FC<IProjectsItem> = props => {
    return (
        <main className="main">
            <Aside asideMenuIcons={asideMenuIcons}/>
            <Middle projectsItems={props.projectsItems}/>
        </main>
    )
}

export default Main
