import React, { useState } from 'react'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('')

  const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID || ''

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('pending')

    if (formspreeId) {
      try {
        const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, message }),
        })
        if (res.ok) {
          setStatus('sent')
          setEmail('')
          setMessage('')
        } else {
          setStatus('error')
        }
      } catch (err) {
        setStatus('error')
      }
    } else {
      // Fallback: open default mail client with prefilled body
      const mailto = `mailto:${encodeURIComponent('veliunusdu14@gmail.com')}?subject=${encodeURIComponent('Contact from portfolio')}&body=${encodeURIComponent(message)}`
      window.location.href = mailto
      setStatus('sent')
    }
  }

  return (
    <div className="contact-form-wrapper">
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="email-input"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          name="message"
          cols="30"
          rows="5"
          className="message"
          placeholder="Message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button className="liquid-btn" type="submit">
          <span className="liquid" aria-hidden></span>
          <span className="label">Send a message</span>
        </button>

        {status === 'pending' && <p>Sending...</p>}
        {status === 'sent' && <p>Thanks — message sent!</p>}
        {status === 'error' && <p>Sorry, something went wrong.</p>}
      </form>
    </div>
  )
}
