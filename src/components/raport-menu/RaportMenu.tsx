import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import './RaportMenu.scss'
import CircleProgress from './CircleProgress'

const RaportMenu:React.FC = () => {

    return (
        <nav className="raport-nav">
            <ul className="raport-nav__menu">
                <li className="raport-nav__menu__item">
                    <CircleProgress percent={75}/>
                    <div className="visitors">
                        <h3>1 300</h3>
                        <p>VIEWS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <CircleProgress percent={35}/>
                    <div className="visitors">
                        <h3>800</h3>
                        <p>VISITORS</p>
                    </div>
                </li>
                <li className="raport-nav__menu__item">
                    <CircleProgress percent={62}/>
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
