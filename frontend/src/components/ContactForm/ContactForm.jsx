import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <h1>Support Growth with BoostMyAthlete</h1>
        <form>
        <label htmlFor="name">Name:</label> <br />
        <input placeholder="Name" type="text" id="name" /> <br />

        <label htmlFor="email">E-mail:</label> <br />
        <input placeholder="Insert email: example@example.com" type="email" id="email" /> <br />

        <label htmlFor="phone">Phone:</label> <br />
        <input placeholder="Insert phone: (xxx-xxxxxxxxx" type="tel" id="phone" /> <br />

        <label htmlFor="budget">Budget:</label> <br />
        <input placeholder="Insert budget" type="number" id="phone" /> <br />

        <label htmlFor="goals">Goals:</label> <br />
        <input placeholder="Goals" type="text" id="goals" /> <br />

        <button type="submit">Send Enquiry</button>

        </form>
    </div>
  )
}

export default ContactForm