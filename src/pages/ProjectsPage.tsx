import React, {useState} from 'react'
import {ProjectContext} from "../services/ProjectContext";
import AppHeader from "../components/app-header/AppHeader";
import Main from "../components/main/Main";
import dashboardApiServices from "../services/DashboardServices";

const ProjectsPage:React.FC = () => {
    dashboardApiServices
        .getAllProjects()
        .then(response => response.json())
        .then(response =>  localStorage.setItem('projects', JSON.stringify(response)))
        .catch(err => console.error(err))
    const [projects, changeProjects] = useState<any>(JSON.parse(localStorage.getItem('projects') as any) || [])

    const projectsHandler = ():void => {
        dashboardApiServices
            .getAllProjects()
            .then(response => response.json())
            .then(response =>  {
                localStorage.setItem('projects', JSON.stringify(response))
                changeProjects(JSON.parse(localStorage.getItem('projects') as any))
            })
            .catch(err => console.error(err))

    }
    return (
        <div>
            <ProjectContext.Provider value={projectsHandler}>
                <AppHeader />
                <Main projectsItems={projects}/>
            </ProjectContext.Provider>
        </div>
    )
}

export default ProjectsPage
