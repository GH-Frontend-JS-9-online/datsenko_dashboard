import React, {useRef} from 'react'
import './Workflow.scss'
import useDraggable from './useDraggable'
import Card from './Card'

const DraggableCard: React.FC = ({ children }) => {
    const cardRef = useRef(null)
    useDraggable(cardRef)

    return (
        <div className="card" ref={cardRef}>
            {children}
        </div>
    )
}

const Workflow:React.FC = () => {
    return (
        <div className="workflow__container">
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
            <DraggableCard><Card/></DraggableCard>
        </div>
    )
}

export default Workflow
