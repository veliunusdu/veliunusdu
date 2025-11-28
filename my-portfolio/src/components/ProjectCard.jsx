import React from 'react'
import { motion } from 'framer-motion'

export default function ProjectCard({ project }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.article
      className="project-card"
      variants={cardVariants}
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="badges">
          {project.stack.map(tech => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
        <div className="links">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>}
          {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repo</a>}
        </div>
      </div>
    </motion.article>
  )
}