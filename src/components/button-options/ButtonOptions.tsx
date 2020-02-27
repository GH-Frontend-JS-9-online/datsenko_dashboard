import React from 'react'
import './ButtonOptions.scss'

interface IButtonOptions {
    [key: string]: string
}

const ButtonOptions:React.FC<IButtonOptions> = props => {
    const optionsItem: Array<string> = ['item 1', 'item 2', 'item 3']
    return (
        <div className="btn-options-wrapper">
            {`${props.beforeButtonText}:`}
            <label className="btn-options" htmlFor="btn-options">
                {props.buttonName}
                <input type="checkbox" id="btn-options"/>
                <i className="fas fa-chevron-down"></i>
                <ul className="menu-options">
                    {optionsItem.map(item => {
                        return (
                            <li className="menu-options__item">
                                <a href="#" className="menu-options__link">
                                    {item}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </label>
        </div>
    )
}

export default ButtonOptions
