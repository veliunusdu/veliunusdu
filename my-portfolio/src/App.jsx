import React, { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import ThemeToggle from './components/ThemeToggle'
import ProjectCard from './components/ProjectCard'
import projects from './data/projects'
import site from './data/siteConfig'
import SocialLinks from './components/SocialLinks'
import Skills from './components/Skills'
import Education from './components/Education'
import AboutMe from './components/AboutMe'
import ParallaxBackground from './components/ParallaxBackground'
import ParallaxHeader from './components/ParallaxHeader'
import SnakeGame from './components/SnakeGame'
import { motion, AnimatePresence } from 'framer-motion'

export default function App() {
  const [isSnakeOpen, setIsSnakeOpen] = useState(false)
  useTheme()

  // On mount, simulate a cursor moving across the name (head -> tail).
  useEffect(() => {
    const startDelay = 1200; // increased delay so the blurry name animation starts later
    const maxSpread = 5; // neighbors to affect
    const stepDelay = 80; // time between each char activation (ms)
    const hold = 140; // how long each activation persists (ms)
    const timers = [];

    const start = setTimeout(() => {
      const chars = Array.from(document.querySelectorAll('.interactive-name .char'));
      if (!chars.length) return;

      chars.forEach((_, i) => {
        const t = setTimeout(() => {
          // clear existing sim classes
          chars.forEach(c => {
            for (let k = 0; k <= maxSpread; k++) c.classList.remove(`sim-${k}`);
          });

          // apply progressive classes to the current index and neighbors
          for (let d = 0; d <= maxSpread; d++) {
            const idxF = i + d;
            const idxB = i - d;
            if (idxF < chars.length) chars[idxF].classList.add(`sim-${d}`);
            if (idxB >= 0) chars[idxB].classList.add(`sim-${d}`);
          }

          // clear after hold
          const clearT = setTimeout(() => {
            chars.forEach(c => {
              for (let k = 0; k <= maxSpread; k++) c.classList.remove(`sim-${k}`);
            });
          }, hold);

          timers.push(clearT);
        }, i * stepDelay);

        timers.push(t);
      });
    }, startDelay);

    timers.push(start);
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="app">
      <ParallaxBackground />
      <AnimatePresence>
        {isSnakeOpen && <SnakeGame onClose={() => setIsSnakeOpen(false)} />}
      </AnimatePresence>

      <motion.header
        id="home"
        className="site-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="header-left">
          <SocialLinks links={site.social} />
        </div>

        <div className="header-center" style={{ flex: 1, textAlign: 'center' }}>
          <ul className="interactive-name">
            {site.name.split('').map((char, index) => (
              <li key={index} className="char" tabIndex="0">
                <span>{char === ' ' ? '\u00A0' : char}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="header-right">
          <ThemeToggle />
        </div>
      </motion.header>

      <nav className="site-nav" style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
        <ul style={{ display: 'flex', gap: '30px', listStyle: 'none', padding: 0, margin: 0 }}>
          <li><a href="#about" style={{ textDecoration: 'none', color: 'var(--fg)', fontWeight: 500, fontSize: '1.1rem' }}>Me</a></li>
          <li><a href="#projects" style={{ textDecoration: 'none', color: 'var(--fg)', fontWeight: 500, fontSize: '1.1rem' }}>Projects</a></li>
          <li><a href="#contact" style={{ textDecoration: 'none', color: 'var(--fg)', fontWeight: 500, fontSize: '1.1rem' }}>Contact</a></li>
        </ul>
      </nav>

      <main>
        <motion.section
          className="hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="hover-underline">{site.headline}</h2>
          <p>Welcome to my portfolio — I build things and learn every day.</p>
        </motion.section>

        <AboutMe />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInLeft}
        >
          <Education />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInRight}
        >
          <Skills />
        </motion.div>

        <motion.section
          id="projects"
          className="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
        >
          <ParallaxHeader>My Projects</ParallaxHeader>
          <motion.div className="project-grid" variants={staggerContainer}>
            {projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <ParallaxHeader>Contact Me</ParallaxHeader>
          {/* Animated mail visual placed between heading and CTA */}
          <div className="letter-image" aria-hidden="true">
            <div className="animated-mail">
              <div className="back-fold"></div>
              <div className="letter">
                <div className="letter-border"></div>
                <div className="letter-title"></div>
                <div className="letter-context"></div>
                <div className="letter-stamp">
                  <div className="letter-stamp-inner"></div>
                </div>
              </div>
              <div className="top-fold"></div>
              <div className="body"></div>
              <div className="left-fold"></div>
            </div>
            <div className="shadow"></div>
          </div>
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
        </motion.section>
      </main>

      <footer className="site-footer">
        <div className="social-links">
          <SocialLinks links={site.social} />
        </div>
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>

        <button
          className="retro-game-btn"
          onClick={() => setIsSnakeOpen(true)}
        >
          🐍 Play Snake
        </button>
      </footer>
    </div>
  )
}