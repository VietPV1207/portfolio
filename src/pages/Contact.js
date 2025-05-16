import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form action="https://formspree.io/f/moqzjqgv" method="POST">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="_replyto" placeholder="Your email" required />
        <textarea name="message" placeholder="Your message..." required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
