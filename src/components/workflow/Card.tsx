import React from 'react'
import './Card.scss'

const Card = () => {
    return (
        <div className="card">
            <div className="card-photo">
                <i className="fas fa-circle"></i>
            </div>
            <div className="card-info">
                <h4>Dashboard</h4>
                <span>Symu.co</span>
                <span><i className="fas fa-circle"></i></span>
                <span>$1500</span>
            </div>
            <div className="card-menu">
                <i className="fas fa-ellipsis-v"></i>
            </div>
        </div>
    )
}

export default Card
