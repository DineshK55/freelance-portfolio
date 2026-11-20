
import {
  FaBolt,
  FaUtensils,
  FaShoppingBag,
  FaExternalLinkAlt, FaCode 
} from 'react-icons/fa'

import './Projects.css'

const projects = [
  {
    number: '01',
    
category: 'COMPLETED CLIENT PROJECT',
title: 'You Call We Solve',
description:
  'A professional service website showcasing electrical, plumbing, breaker machine and concrete core cutting services, with direct WhatsApp contact.',
url: 'https://www.youcallwesolve.com/',

    technologies: ['React', 'JavaScript', 'CSS3'],
    icon: FaBolt,
    status: 'COMPLETED',
    type: 'business',
  },
  {
    number: '02',
    category: 'RESTAURANT WEBSITE',
    title: 'Restaurant Website',
    description:
      'A modern restaurant website with an attractive menu presentation, food sections, business information and responsive design.',
    technologies: ['React', 'JavaScript', 'CSS3'],
    icon: FaUtensils,
    status: 'PLANNED',
    type: 'restaurant',
  },
  {
    number: '03',
    category: 'FULL-STACK APPLICATION',
    title: 'E-commerce Website',
    description:
      'A full-stack shopping platform with product listings, customer features, backend APIs and database integration.',
    technologies: ['React', 'Node.js', 'MySQL'],
    icon: FaShoppingBag,
    status: 'PLANNED',
    type: 'ecommerce',
  },
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">

        <div className="projects-intro">
          <div>
            <p className="projects-eyebrow">
              MY UPCOMING WORK
            </p>

            <h2>
              Projects built
              <br />
              for <span>real-world needs.</span>
            </h2>
          </div>

          <p className="projects-intro-text">
            Practical website concepts designed to demonstrate
            my frontend, backend and full-stack development
            capabilities.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const ProjectIcon = project.icon

            return (
              <article
                className={`project-card project-${project.type}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">
                    {project.number}
                  </span>

                  <span className="project-status">
                    <span />
                    {project.status}
                  </span>
                </div>

                <div className="project-icon">
                  <ProjectIcon />
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                
<div className="project-card-footer">
  {project.url ? (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-live-link"
    >
      View Live Website
      <FaExternalLinkAlt />
    </a>
  ) : (
    <span>Project in planning</span>
  )}
</div>

              </article>
            )
          })}
        </div>

        <div className="projects-bottom">
          <p>
            BUILDING PRACTICAL IDEAS INTO DIGITAL PRODUCTS
          </p>

          <a href="#contact">
            Have a project in mind?
            <span>Let's discuss ↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
