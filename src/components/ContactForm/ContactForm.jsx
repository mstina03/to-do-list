import './ContactForm.css';

const ContactForm = ({ addContact }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

        const nameField = document.querySelector('[name=name]');
        const phoneField = document.querySelector('[name=phone]');
        const emailField = document.querySelector('[name=email]');
        const addressField = document.querySelector('[name=address]');
        const notesField = document.querySelector('[name=notes]');

        const nameValue = nameField.value;
        const phoneValue = phoneField.value;
        const emailValue = emailField.value;
        const addressValue = addressField.value;
        const notesValue = notesField.value;

        nameField.value = '';
        phoneField.value = '';
        emailField.value = '';
        addressField.value = '';
        notesField.value = '';

        addContact(nameValue, phoneValue, emailValue, addressValue, notesValue);

    }
    return (
        <section className='contact-form'>
            <h2> New Contact</h2>
            <form action="#" method="GET" onSubmit={handleSubmit}>

                <div className='form-row'>
                    <label>
                        Name:
                        <input type="text" name="name" placeholder="Enter Name" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Phone:
                        <input type="text" name="phone" placeholder="Enter Phone Number" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Email:
                        <input type="text" name="email" placeholder="Enter Email Address" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Addr :
                        <input type="text" name="address" placeholder="Enter Address" />
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