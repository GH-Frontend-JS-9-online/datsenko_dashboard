import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './RaportMenu.scss'

const RaportMenu:React.FC = () => {
    return (
        <nav className="raport-nav">
            <ul className="raport-nav__menu">
                <li className="raport-nav__menu__item">
                    <CircularProgressbar value={75} text={`${75}%`} />
                    <div className="visitors">
                        <h3>1 300</h3>
                        <p>VIEWS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <CircularProgressbar value={35} text={`${35}%`} />
                    <div className="visitors">
                        <h3>800</h3>
                        <p>VISITORS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <CircularProgressbar value={62} text={`${62}%`} />
                    <div className="visitors">
                        <h3>3 800</h3>
                        <p>IMPRESSIONS</p>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default RaportMenu
