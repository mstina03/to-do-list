import React from 'react';
import './ContactCard.css';

export default function ContactCard({ contact, deleteContact }) {
    const [isFront, setFront] = React.useState(true);

    const handleFlip = () => setFront(!isFront);
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deleteContact();
    };

    const cardFront = (
        <div className="card-front">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Phone:</strong> {contact.phone}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Address:</strong> {contact.address}</p> 
        </div>
    );

    const cardBack = <div className="card-back">Notes: {contact.notes}</div>;

    return (
        <div className="contact-card" onClick={handleFlip}>
            <span className="delete-contact" onClick={handleDelete}>Delete</span>
            {isFront ? cardFront : cardBack}
        </div>
    );
}
  