import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import Workflow from '../components/workflow/Workflow'
import SecondMenu from '../components/second-menu/SecondMenu'
import HomeBarChart from '../components/home-bar-chart/HomeBarChart'
import MiniPresentation from '../components/board-mini-presentation/MiniPresentation'

const HomePage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <div className="middle">
                    {/*<SecondMenu/>*/}
                    {/*<Workflow/>*/}
                    {/*<HomeBarChart/>*/}
                    <MiniPresentation/>
                </div>

            </main>
        </div>
    )
}

export default HomePage
