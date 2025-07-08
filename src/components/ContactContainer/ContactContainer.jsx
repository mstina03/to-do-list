import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactContainer = ({ contacts, deleteContact }) => {
    return (
        <div className="contact-container">
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    id={index} // ✅ Pass the index to use as ID
                    front={contact.front}
                    back={contact.back}
                    deleteContact={deleteContact}
                />
            ))}
        </div>
    );
};

export default ContactContainer;
