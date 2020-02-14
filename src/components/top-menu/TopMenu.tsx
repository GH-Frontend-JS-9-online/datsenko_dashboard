import React, {useState} from 'react'
import './TopMenu.scss'
import AddProject from '../add-project/AddProject'

interface ITopMenu {
    topMenuIcons: Array<string>
}

const TopMenu:React.FC<ITopMenu> = props => {
    const [isShowProject, setShowProject] = useState<boolean>(false)
    const toggleHandler = (id: number):void =>  {
        if (id === 0) {
            setShowProject(prev => !prev)
        }
    }

    const closeAddProject = ():void => {
        setShowProject(prev => !prev)
    }

    return (
        <>
            <ul className="top-nav__menu">
                {props.topMenuIcons.map((item, index) => {
                    return (
                        <li key={index} onClick={() => toggleHandler(index)} className="top-nav__menu__item">
                            <a href="#" className="top-nav__menu__link" >
                                <i className={`fas fa-${item}`}></i>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <AddProject close={closeAddProject} addProjectDisplay={(isShowProject) ? 'flex' : 'none'}/>
        </>
    )
}

export default TopMenu
