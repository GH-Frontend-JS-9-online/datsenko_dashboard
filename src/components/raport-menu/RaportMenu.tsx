import React from 'react'
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './RaportMenu.scss'
import VisibilitySensor from 'react-visibility-sensor'


const RaportMenu:React.FC = () => {
    return (
        <nav className="raport-nav">
            <ul className="raport-nav__menu">
                <li className="raport-nav__menu__item">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 75 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        textSize: '22px',
                                        pathColor: `#2196f3`,
                                        textColor: '#2196f3',
                                        trailColor: '#9ca1b2'
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>
                    <div className="visitors">
                        <h3>1 300</h3>
                        <p>VIEWS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 35 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        textSize: '22px',
                                        pathColor: `#2196f3`,
                                        textColor: '#2196f3',
                                        trailColor: '#9ca1b2'
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>
                    <div className="visitors">
                        <h3>800</h3>
                        <p>VISITORS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <VisibilitySensor>
                        {({ isVisible }) => {
                            const percentage = isVisible ? 62 : 0;
                            return (
                                <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    styles={buildStyles({
                                        textSize: '22px',
                                        pathColor: `#2196f3`,
                                        textColor: '#2196f3',
                                        trailColor: '#9ca1b2'
                                    })}
                                />
                            );
                        }}
                    </VisibilitySensor>
                    <div className="visitors">
                        <h3>3 800</h3>
                        <p>IMPRESSIONS</p>
                    </div>
                </li>
                <li className="raport-nav__right-menu__item">
                    <a href="#" className="second-nav__right-menu__link">
                        Week
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default RaportMenu
