import React from 'react'
import { motion } from 'framer-motion'

function Icon({ name }) {
  switch (name.toLowerCase()) {
    case 'github':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 .5C5.648.5.5 5.648.5 12c0 5.084 3.292 9.39 7.87 10.91.576.106.785-.25.785-.556 0-.275-.01-1.005-.016-1.976-3.2.695-3.876-1.543-3.876-1.543-.523-1.33-1.277-1.684-1.277-1.684-1.044-.713.08-.699.08-.699 1.154.08 1.76 1.185 1.76 1.185 1.026 1.757 2.693 1.25 3.347.956.104-.743.402-1.25.732-1.538-2.555-.291-5.243-1.277-5.243-5.684 0-1.255.448-2.28 1.183-3.084-.119-.293-.512-1.47.113-3.064 0 0 .965-.31 3.163 1.18a11.02 11.02 0 012.878-.387c.976.004 1.96.132 2.878.387 2.197-1.49 3.16-1.18 3.16-1.18.628 1.596.235 2.771.116 3.064.737.804 1.183 1.83 1.183 3.084 0 4.42-2.693 5.389-5.255 5.673.413.356.78 1.056.78 2.128 0 1.538-.014 2.776-.014 3.154 0 .31.205.668.79.555C20.71 21.386 24 17.084 24 12c0-6.352-5.148-11.5-12-11.5z" fill="currentColor" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'instagram':
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.8a4.2 4.2 0 100 8.4 4.2 4.2 0 000-8.4zM18.5 6.2a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" fill="currentColor" />
        </svg>
      )
    case 'email':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    default:
      return null
  }
}

export default function SocialLinks({ links }) {
  if (!links) return null

  return (
    <nav className="social-links" aria-label="Social links">
      {Object.keys(links).map((key) => {
        const url = links[key]
        if (!url) return null

        // For email, add mailto:
        const href = key === 'email' ? `mailto:${url}` : url
        const target = key === 'email' ? undefined : '_blank'
        const rel = 'noopener noreferrer'

        return (
          <a
            key={key}
            href={href}
            target={target}
            rel={rel}
            className={`social-${key}`}
            aria-label={key === 'email' ? 'Email' : key}
          >
            <span className="sr-only">{key}</span>
            <Icon name={key} />
          </a>
        )
      })}
    </nav>
  )
}
