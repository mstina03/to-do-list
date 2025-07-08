import React from 'react';
import './ContactCard.css';

export default function ContactCard({ id, front, back, deleteContact }) {
    const [isFront, setFront] = React.useState(true);

    const cardContent = isFront
        ? <div className='card-front'>{front}</div>
        : <div className='card-back'>Notes: {back}</div>;

    const handleFlip = () => setFront(!isFront);

    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteContact(id); // ✅ Use ID, not front
    };
    console.log('Rendering ContactCard:', front);

    return (
        <div className='contact-card' onClick={handleFlip}>
            <button className='delete-contact' onClick={handleDelete}>Delete</button>
            {cardContent}
        </div>
    );
}
