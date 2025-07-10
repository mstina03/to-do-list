import React from 'react';
import './TaskCard.css';


export default function TaskCard({ id, front, back, completed, deleteTask, completeTask }) {

    const [isFront, setFront] = React.useState(true);

    const cardContent = isFront ?
        <div className={`card-front ${completed ? 'completed' : ''}`}> {front}</div> :
        <div className='card-back'> Notes: {back}</div>;

    const handleFlip = () => {
        setFront(!isFront);
    };
    const handleDelete = (e) => {

        e.stopPropagation();
        deleteTask(id);

    }

    const handleComplete = (e) => {
        e.stopPropagation();
        completeTask(id);


    }

    return (
        <div className='task-card'>
            <div className='task-actions'>
                <button className='complete-task' onClick={handleComplete}>Complete</button>
                <button className='delete-task' onClick={handleDelete}>Delete</button>
            </div>

            <div className='card-body' onClick={handleFlip}>
                {cardContent}
            </div>
        </div>
    );

}



