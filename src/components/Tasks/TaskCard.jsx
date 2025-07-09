import React from 'react';
import './TaskCard.css';


export default function TaskCard({ front, back, deleteTask, completeTask }) {

    const [isFront, setFront] = React.useState(true);

    const cardContent = isFront ?
        <div className='card-front'> {front}</div> :
        <div className='card-back'> Notes:{back}</div>;

    const handleFlip = () => {
        setFront(!isFront);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteTask(front);

    }

    const handleComplete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        completeTask(front);

    }

    return (
        <div className='task-card' onClick={handleFlip}>
            <span className='complete-task' onClick={handleComplete}>Complete</span>
            <span className='delete-task' onClick={handleDelete}>Delete</span>
            {cardContent}

        </div>
    )
}



