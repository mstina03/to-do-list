import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactContainer = ({ contacts, deleteContact }) => {
    return (
        <div className="contact-container">
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    front={contact.front}
                    back={contact.back}
                    deleteContact={() => deleteContact(index)}
                />
            ))}
        </div>
    );
};

export default ContactContainer;
