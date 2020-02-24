import HomePage from '../pages/HomePage'
import InboxPage from '../pages/InboxPage'
import ProjectsPage from '../pages/ProjectsPage'
import RaportPage from '../pages/RaportPage'
import Login from '../components/authorization/Login'
import SignUp from '../components/authorization/SignUp'
import Forgot from '../components/authorization/Forgot'
import React from 'react'

const routes = {
    '/': () => <HomePage/>,
    '/inbox': () => <InboxPage/>,
    '/projects': () => <ProjectsPage/>,
    '/raport': () => <RaportPage/>,
    '/login': () => <Login/>,
    '/signup': () => <SignUp/>,
    '/forgot': () => <Forgot/>
}

export default routes
