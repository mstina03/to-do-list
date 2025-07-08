import './ContactForm.css';

const ContactForm = ({ addContact }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.querySelector('[name=name]').value;
        const phone = form.querySelector('[name=phone]').value;
        const email = form.querySelector('[name=email]').value;
        const address = form.querySelector('[name=address]').value;
        const notes = form.querySelector('[name=notes]').value;

        console.log("Notes:", notes); // should not be null now

        addContact(name, phone, email, address, notes);

        form.reset();
    };
      
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
                        <input type="text" name="address" placeholder="Enter Mailing Address" />
                    </label>

                </div>
                <div className='form-row'>
                    <label>
                        Notes:
                        <input type="text" name="notes" placeholder="Add Any Notes Here" />
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