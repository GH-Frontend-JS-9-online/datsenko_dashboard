import React from 'react'
import './Middle.scss'
import SecondMenu from '../second-menu/SecondMenu'
import ProjectMenu from '../project-menu/ProjectMenu'
import ProjectsItem from '../projects-item/ProjectsItem'
import {IProjectsItem} from '../../interfaces/IProjectsItem'

const Middle:React.FC<IProjectsItem> = props => {

    const projectMenuItems: Array<string> = [
        'Project title',
        'Value',
        'Deadline',
        'Time spent',
        'Progress',
        'Status',
        'Assigned to',
        ''
    ]

    return (
        <div className="middle">
            <SecondMenu projectsItems={props.projectsItems}/>
            <ProjectMenu projectMenuItems={projectMenuItems}/>
            <ProjectsItem projectsItems={props.projectsItems}/>
        </div>
    )
}

export default Middle
