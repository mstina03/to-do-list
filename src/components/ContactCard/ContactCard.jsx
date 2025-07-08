import React from 'react';
import './ContactCard.css';

export default function ContactCard({ front, back, deleteContact }) {
    const [isFront, setFront] = React.useState(true);

    const cardContent = isFront
        ? <div className='card-front'>{front}</div>
        : <div className='card-back'>Notes: {back}</div>;

    const handleFlip = () => setFront(!isFront);

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteContact(front); // you were using 'front' as the unique key
    };

    return (
        <div className='contact-card' onClick={handleFlip}>
            <span className='delete-contact' onClick={handleDelete}>Delete</span>
            {cardContent}
        </div>
    );
}
