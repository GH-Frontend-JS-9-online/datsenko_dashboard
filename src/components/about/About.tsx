import React from 'react'
import './About.scss'
import {IAbout} from '../../interfaces/IAbout'
import {useSelector} from 'react-redux'

const About: React.FC<IAbout> = props => {
    const user = useSelector((state: any) => state.user)
    return (
        <div className="about">
            <div className="user-photo">
                <i className="fas fa-circle"></i>
            </div>
            {user.map((item: any, index: number) => {
                return (
                    <div key={index}>
                        <div className="user-data">
                            <h2>{item.name}</h2>
                            <h3>{item.position}</h3>
                            <p>{item.description}</p>
                        </div>
                        <ul className="user-contacts">
                            <li className="user-contacts__item">
                                <h4>Email</h4>
                                <span>{item.email}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Phone</h4>
                                <span>{item.phone}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Address</h4>
                                <span>{item.address}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Organization</h4>
                                <span>{item.organization}</span>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default About
