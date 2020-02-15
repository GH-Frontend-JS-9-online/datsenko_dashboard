import React from 'react'
import './About.scss'
import {IAbout} from '../../interfaces/IAbout'

const About: React.FC<IAbout> = props => {
    return (
        <div className="about">
            <div className="user-photo">
                <i className="fas fa-circle"></i>
            </div>
            {props.aboutItems.map(({name, email, position, description, phone, address, organization}) => {
                return (
                    <>
                        <div className="user-data">
                            <h2>{name}</h2>
                            <h3>{position}</h3>
                            <p>{description}</p>
                        </div>
                        <ul className="user-contacts">
                            <li className="user-contacts__item">
                                <h4>Email</h4>
                                <span>{email}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Phone</h4>
                                <span>{phone}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Address</h4>
                                <span>{address}</span>
                            </li>
                            <li className="user-contacts__item">
                                <h4>Organization</h4>
                                <span>{organization}</span>
                            </li>
                        </ul></>
                )
            })}
        </div>
    )
}

export default About
