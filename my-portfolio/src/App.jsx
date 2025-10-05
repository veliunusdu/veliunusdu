import React from 'react'
import { useTheme } from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'
import site from './data/siteConfig'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'
import Education from './components/Education'
import ContactForm from './components/ContactForm'

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
          <ContactForm />
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <SocialLinks links={site.social} />
      </footer>
    </div>
  )
}