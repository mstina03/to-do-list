import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactContainer = ({ contacts, deleteContact }) => {

    return (
        <div className="contact-container">
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    contact={contact}
                    deleteContact={() => deleteContact(index)}
                />
              
            ))}
        </div>
    );
};

export default ContactContainer;
