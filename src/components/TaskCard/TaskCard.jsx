import React from 'react';
import './TaskCard.css';


export default function TaskCard({ front, back, deleteTask }) {

    const [isFront, setFront] = React.useState(true);

    const cardContent = isFront ?
        <div className='card-front'>Task: {front}</div> :
        <div className='card-back'>Notes: {back}</div>;

    const handleFlip = () => {
        setFront(!isFront);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(front);

    }

    return (
        <div className='task-card' onClick={handleFlip}>
            <span className='delete-task' onClick={handleDelete}>X</span>
            {cardContent}

        </div>
    )
}



