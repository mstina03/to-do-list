import React, { useRef } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    const notesRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const phone = phoneRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const notes = notesRef.current.value;

        addContact(name, phone, email, address, notes);

        // Reset fields manually
        nameRef.current.value = '';
        phoneRef.current.value = '';
        emailRef.current.value = '';
        addressRef.current.value = '';
        notesRef.current.value = '';
    };

    return (
        <section className='contact-form'>
            <h2>New Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter Name" ref={nameRef} />
                    </label>
                </div>

                <div className='form-row'>
                    <label>
                        Phone:
                        <input type="text" name="phone" placeholder="Enter Phone Number" ref={phoneRef} />
                    </label>
                </div>

                <div className='form-row'>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Enter Email Address" ref={emailRef} />
                    </label>
                </div>

                <div className='form-row'>
                    <label>
                        Addr :
                        <input type="text" name="address" placeholder="Enter Mailing Address" ref={addressRef} />
                    </label>
                </div>

                <div className='form-row'>
                    <label>
                        Notes:
                        <input type="text" name="notes" placeholder="Enter Notes" ref={notesRef} />
                    </label>
                </div>

                <div className='form-row'>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
