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
      // fallback to mailto
      const mailto = `mailto:${encodeURIComponent('veliunusdu14@gmail.com')}?subject=${encodeURIComponent('Contact from portfolio')}&body=${encodeURIComponent(message)}`
      window.location.href = mailto
      setStatus('sent')
    }
  }

  return (
    <div className="contact-container">
      <div className="picture-container">
        {/* SVG illustration copied from user */}
        <div className="picture" dangerouslySetInnerHTML={{ __html: `<!-- svg omitted for brevity -->` }} />
      </div>

      <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <span className="form-header">Contact us</span>
          <input type="email" className="email-input" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <textarea name="feedback" cols="30" rows="5" className="message" placeholder="Message..." value={message} onChange={e => setMessage(e.target.value)} required></textarea>
          <button className="submit" type="submit">Submit</button>
          {status === 'pending' && <p>Sending...</p>}
          {status === 'sent' && <p>Thanks — message sent!</p>}
          {status === 'error' && <p>Sorry, something went wrong.</p>}
        </form>
      </div>
    </div>
  )
}
