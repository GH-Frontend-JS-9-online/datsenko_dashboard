import React, {useState} from 'react'
import './App.scss'
import {BrowserRouter, Switch, Route}from 'react-router-dom'
import ProjectsPage from '../../pages/ProjectsPage'
import InboxPage from '../../pages/InboxPage'
import HomePage from '../../pages/HomePage'
import RaportPage from '../../pages/RaportPage'
import AuthorizationPage from '../../pages/AuthorizationPage'

const App = () => {

    return (
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route component={HomePage} path="/" exact/>
                    <Route  component={ProjectsPage} path="/projects"/>
                    <Route  component={RaportPage} path="/raport"/>
                    <Route  component={InboxPage} path="/inbox"/>
                    <Route  component={AuthorizationPage} path="/authorization"/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App
