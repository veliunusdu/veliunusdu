import React from 'react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="card-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="badges">
          {project.stack.map(tech => (
            <span key={tech} className="badge">{tech}</span>
          ))}
        </div>
        <div className="links">
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}