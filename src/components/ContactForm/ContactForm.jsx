import './ContactForm.css';

const ContactForm = ({ addContact }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const firstField = document.querySelector('[name=first]');
        const lastField = document.querySelector('[name=last]');
        const phoneField = document.querySelector('[name=phone]');
        const emailField = document.querySelector('[name=email]');
        const notesField = document.querySelector('[name=notes]');

        const firstValue = firstField.value;
        const lastValue = lastField.value;
        const phoneValue = lastField.value;
        const emailValue = lastField.value;
        const notesValue = lastField.value;

        firstField.value = '';
        lastField.value = '';
        phoneField.value = '';
        emailField.value = '';
        notesField.value = '';

        addContact(firstValue, lastValue, phoneValue,emailValue,notesValue);

    }
    return (
        <section className='contact-form'>
            <h2> New Contact</h2>
            <form action="#" method="GET" onSubmit={handleSubmit}>

                <div className='form-row'>
                    <label>
                        First:
                        <input type="text" name="first" placeholder="First Name" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Last:
                        <input type="text" name="last" placeholder="Last Name" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Phone:
                        <input type="text" name="phone" placeholder="Phone Number" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Email Address" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Notes:
                        <input type="text" name="notes" placeholder="Notes" />
                    </label>

                </div>
                
                <div className='form-row'>
                    <button type='submit'>Add</button>

                </div>
            </form>

        </section>
    )
}
export default ContactForm;