import React from 'react'
import { useTheme } from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'
import site from './data/siteConfig'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'
import Education from './components/Education'

export default function App() {
  const [theme] = useTheme()

  return (
    <div className="app">
      <header
        className="site-header"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <div className="header-left">
          <SocialLinks links={site.social} />
        </div>

        <div className="header-center" style={{ flex: 1, textAlign: 'center' }}>
          <h1 className="site-title">{site.name}</h1>
        </div>

        <div className="header-right">
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Hi, I'm a Student</h2>
          <p>Hello, Hello</p>
        </section>

        <Skills />

        <Education />

        <section className="projects">
          <h2>My Projects</h2>
          <div className="project-grid">
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="contact">
          <h2>Contact Me</h2>
          {site.email && (
            (() => {
              const params = new URLSearchParams({ view: 'cm', fs: '1', to: site.email })
              const href = `https://mail.google.com/mail/?${params.toString()}`
              return (
                <div className="contact-cta">
                  <a href={href} target="_blank" rel="noopener noreferrer" className="liquid-btn contact-link" aria-label="Send email">
                    <span className="liquid" aria-hidden></span>
                    <span className="label">Send me an email</span>
                  </a>
                </div>
              )
            })()
          )}
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <SocialLinks links={site.social} />
      </footer>
    </div>
  )
}