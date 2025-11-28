import React from 'react'
import ParallaxHeader from './ParallaxHeader'
import education from '../data/education'

export default function Education() {
  return (
    <section id="education" className="education">
      <ParallaxHeader>Education</ParallaxHeader>
      <div className="education-card">
        <h3>{education.institution}</h3>
        <p className="edu-program">{education.program}</p>
        <p className="edu-status">{education.status} — {education.date}</p>
        {education.courses && education.courses.length > 0 && (
          <div className="edu-courses">
            <h4>Related Coursework</h4>
            <ul>
              {education.courses.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
