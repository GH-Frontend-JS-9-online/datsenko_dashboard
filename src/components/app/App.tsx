import React, {useState} from 'react'
import './App.scss'
import AppHeader from '../app-header/AppHeader'
import Main from '../main/Main'
import Login from '../authorization/Login'
import Forgot from '../authorization/Forgot'
import SignUp from '../authorization/SignUp'
import {ProjectContext} from '../../services/ProjectContext'
import dashboardApiServices from "../../services/DashboardServices";


const App = () => {
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
        <div className="App">
            <ProjectContext.Provider value={projectsHandler}>
                <AppHeader />
                <Main projectsItems={projects}/>
            </ProjectContext.Provider>
            {/*<Login/>*/}
            {/*<Forgot/>*/}
            {/*<SignUp/>*/}
        </div>
    )
}

export default App
