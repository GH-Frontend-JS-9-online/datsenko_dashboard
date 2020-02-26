import React, {useRef} from 'react'
import './Workflow.scss'
import useDraggable from './useDraggable'

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
            <DraggableCard>Card 1</DraggableCard>
            <DraggableCard>Card 2</DraggableCard>
            <DraggableCard>Card 3</DraggableCard>
            <DraggableCard>Card 4</DraggableCard>
            <DraggableCard>Card 5</DraggableCard>
            <DraggableCard>Card 6</DraggableCard>
            <DraggableCard>Card 7</DraggableCard>
            <DraggableCard>Card 8</DraggableCard>
            <DraggableCard>Card 9</DraggableCard>
        </div>
    )
}

export default Workflow
