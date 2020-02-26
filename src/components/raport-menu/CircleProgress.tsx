import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import VisibilitySensor from 'react-visibility-sensor'


interface ICircleProgress {
    [key: string]: any
}

const CircleProgress:React.FC<ICircleProgress> = props => {

    const circleProgressStyle: ICircleProgress = {
        textSize: '22px',
        pathColor: `#2196f3`,
        textColor: '#2196f3',
        trailColor: '#9ca1b2'
    }

    return (
        <VisibilitySensor>
            {({ isVisible }) => {
                const percentage = isVisible ? props.percent : 0
                return (
                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                        styles={buildStyles(circleProgressStyle)}
                    />
                )
            }}
        </VisibilitySensor>
    )
}

export default CircleProgress
