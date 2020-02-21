import React from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectMenu from '../project-menu/ProjectMenu'
import ProjectsItem from '../projects-item/ProjectsItem'

const Middle:React.FC = () => {

    return (
        <div className="middle">
            <SecondMenu />
            <ProjectMenu/>
            <ProjectsItem />
        </div>
    )
}

export default Middle
