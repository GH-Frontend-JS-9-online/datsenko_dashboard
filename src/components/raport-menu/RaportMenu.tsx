import React from 'react'
import 'react-circular-progressbar/dist/styles.css'
import './RaportMenu.scss'
import CircleProgress from './CircleProgress'

type RaportMenuData = {
    [key: string]: any
}

const RaportMenu:React.FC = () => {

    const data: Array<RaportMenuData> = [
        {
            title: 'VIEWS',
            amount: 1300,
            percent: 75
        },
        {
            title: 'VISITORS',
            amount: 800,
            percent: 35
        },
        {
            title: 'VIEWS',
            amount: 3300,
            percent: 62
        }
    ]

    return (
        <nav className="raport-nav">
            <ul className="raport-nav__menu">
                {data.map(({title, amount, percent}) => {
                    return (
                        <li className="raport-nav__menu__item">
                            <CircleProgress percent={percent}/>
                            <div className="visitors">
                                <h3>{amount}</h3>
                                <p>{title}</p>
                            </div>
                        </li>
                    )
                })}
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
