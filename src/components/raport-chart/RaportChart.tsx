import React from 'react'
import './RaportChart.scss'
import { ResponsiveContainer, AreaChart, Area } from 'recharts'

const RaportChart: React.FC = () => {
    const data = [
        {
            uv: 3000
        },
        {
            uv: 4000
        },
        {
            uv: 3000
        },
        {
            uv: 3500
        },
        {
            uv: 2000,
        },
        {
            uv: 3000
        },
        {
            uv: 3500
        }
    ]
    return (
        <div className="chart" style={{ width: '100%', height: 300, background: '#2b2d3' }}>
            <ResponsiveContainer>
                <AreaChart
                    data={data}
                >
                    <Area type="monotone" dataKey="uv" stroke="#2196f3" fill="#293d58" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}

export default RaportChart
