import React from 'react'
import AppHeader from '../components/app-header/AppHeader'
import Aside from '../components/aside/Aside'
import RaportMenu from '../components/raport-menu/RaportMenu'
import RaportChart from '../components/raport-chart/RaportChart'
import RaportTable from '../components/raport-table/RaportTable'

const RaportPage:React.FC = () => {
    return (
        <div>
            <AppHeader/>
            <main className="main">
                <Aside/>
                <div className="raport" style={{width: '100%'}}>
                    <RaportMenu/>
                    <RaportChart/>
                    <RaportTable/>
                </div>
            </main>
        </div>
    )
}

export default RaportPage
