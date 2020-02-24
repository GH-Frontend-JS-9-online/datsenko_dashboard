import React from 'react'
import './App.scss'
import {useRoutes} from 'hookrouter'
import routes from '../../routes/routes'
import NotFoundPage from '../../pages/NotFoundPage'

const App = () => {
    const routeResult = useRoutes(routes)
    return (
        <div className="App">
            {routeResult || <NotFoundPage />}
        </div>
    )
}

export default App
