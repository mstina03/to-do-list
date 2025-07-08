import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactContainer = ({ contacts, deleteContact }) => {
    console.log("📦 Rendering ContactContainer with:", contacts); // ✅ Place here
    return (
        <div className="contact-container">
            {contacts.map((contact, index) => (
                <ContactCard
                    key={index}
                    id={index}
                    front={contact.front}
                    back={contact.back}
                    deleteContact={deleteContact}
                />
            ))}
        </div>
    );
};

export default ContactContainer;
