import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Main from '../components/main/Main'
import dashboardApiServices from '../services/DashboardServices'

const ProjectsPage: React.FC = () => {
    dashboardApiServices
        .getAllProjects()
        .then(response => response.json())
        .then(response => localStorage.setItem('projects', JSON.stringify(response)))
        .catch(err => console.error(err))

    return (
        <div>
            <AppHeader/>
            <Main/>
        </div>
    )
}

export default ProjectsPage
