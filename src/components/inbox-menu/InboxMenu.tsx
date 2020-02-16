import React, {useContext} from 'react'
import './InboxMenu.scss'
import {IMessagesItem} from '../../interfaces/IMessagesItem'

const InboxMenu:React.FC<IMessagesItem> = props => {
    return (
        <nav className="inbox-nav">
            <ul className="inbox-nav__menu">
                <ul className="inbox-nav__left-menu">
                    <li className="inbox-nav__left-menu__item">
                        <a href="#" className="inbox-nav__left-menu__link">
                            <i className="fas fa-inbox"></i>
                            {`Inbox (${props.messagesItems.length})`}
                        </a>
                    </li>
                    <li className="inbox-nav__left-menu__item">
                        <a href="#" className="inbox-nav__left-menu__link">
                            <i className="fas fa-paper-plane"></i>
                            Sent
                        </a>
                    </li>
                    <li className="inbox-nav__left-menu__item">
                        <a href="#" className="inbox-nav__left-menu__link">
                            <i className="fas fa-trash"></i>
                            Trash
                        </a>
                    </li>
                </ul>
                <ul className="inbox-nav__right-menu">
                    <li className="inbox-nav__right-menu__item">
                        <a href="#" className="inbox-nav__right-menu__link">
                            Filter messages:
                        </a>
                    </li>
                    <li className="inbox-nav__right-menu__item">
                        <a href="#" className="inbox-nav__right-menu__link">
                            Date
                        </a>
                    </li>
                </ul>
            </ul>
        </nav>
    )
}

export default InboxMenu
