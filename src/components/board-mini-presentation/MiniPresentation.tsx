import React from 'react'
import './MiniPresentation.scss'
import RaportChart from '../raport-chart/RaportChart'
import MiniRaport from './MiniRaport'
import HomeBarChart from '../home-bar-chart/HomeBarChart'
import Calendar from 'react-calendar'
import MiniInbox from './MiniInbox'
import MiniProjects from './MiniProjects'

const MiniPresentation: React.FC = () => {
    return (
        <div className="mini-presentation">
            <div className="mini-raport">
                <MiniRaport/>
                <RaportChart/>
            </div>
            <div className="mini-projects">
                <MiniProjects/>
            </div>

            <div className="wrapper-sales-inbox">
                <div className="sales-raport">
                    <HomeBarChart/>
                </div>
                <div className="mini-inbox">
                    <MiniInbox/>
                </div>
            </div>

            <div className="calendar">
                <Calendar
                    calendarType={'US'}
                    locale={'en-EN'}
                    next2Label={''}
                    prev2Label={''}

                />
            </div>
        </div>
    )
}

export default MiniPresentation
