import React from 'react'
import './HomeBarChart.scss'
import {BarChart, Bar, XAxis} from 'recharts'
import ButtonOptions from '../button-options/ButtonOptions'

const HomeBarChart: React.FC = () => {
    const data = [
        {
            name: '1',
            uv: 4000
        },
        {
            name: '2',
            uv: 3000
        },
        {
            name: '3',
            uv: 2000
        },
        {
            name: '4',
            uv: 2780
        },
        {
            name: '5',
            uv: 1890
        },
        {
            name: '6',
            uv: 2390
        },
        {
            name: '7',
            uv: 2490
        },
        {
            name: '8',
            uv: 1490
        },
        {
            name: '9',
            uv: 3490
        },
        {
            name: '10',
            uv: 2490
        },
        {
            name: '11',
            uv: 1490
        },
        {
            name: '12',
            uv: 3490
        }
    ];
    return (
        <div className="chart-two">
            <div className="title-chart-two">Sales report
                <ButtonOptions beforeButtonText="Show" buttonName="Year"/>
            </div>
            <div className="line-wrapper">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="bar-chart">
                <BarChart width={700} height={300} data={data} margin={{}}>
                    <XAxis dataKey="name"/>
                    <Bar dataKey="uv" fill="#505464"/>
                </BarChart>
            </div>
        </div>
    )
}

export default HomeBarChart
