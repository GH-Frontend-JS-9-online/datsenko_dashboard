import React from 'react'
import './InboxMenu.scss'
import {useSelector} from 'react-redux'
import ButtonOptions from '../button-options/ButtonOptions'

const InboxMenu: React.FC = () => {
    const allThreadMessages = useSelector((state: any) => state.allThreadMessages)
    return (
        <nav className="inbox-nav">
            <ul className="inbox-nav_menu">
                <li className="inbox-nav_menu__item">
                    <a href="#" className="inbox-nav_menu__link">
                        <i className="fas fa-inbox"></i>
                        {`Inbox (${allThreadMessages.length})`}
                    </a>
                </li>
                <li className="inbox-nav_menu__item">
                    <a href="#" className="inbox-nav_menu__link">
                        <i className="fas fa-paper-plane"></i>
                        Sent
                    </a>
                </li>
                <li className="inbox-nav_menu__item">
                    <a href="#" className="inbox-nav_menu__link">
                        <i className="fas fa-trash"></i>
                        Trash
                    </a>
                </li>
            </ul>
            <ButtonOptions beforeButtonText="Filter messages" buttonName="Date"/>
        </nav>
    )
}

export default InboxMenu
