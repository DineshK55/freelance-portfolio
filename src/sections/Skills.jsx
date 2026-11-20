
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaFire,
  FaGitAlt,
  FaGithub,
  FaCloud,
  FaPaperPlane,
} from 'react-icons/fa'

import './Skills.css'

const skillGroups = [
  {
    number: '01',
    label: 'CLIENT SIDE',
    title: 'Frontend Development',
    description:
      'Building responsive, modern and interactive interfaces that deliver a smooth experience across devices.',
    technologies: [
      { name: 'HTML5', icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', icon: FaJs, color: '#f0db4f' },
      { name: 'React.js', icon: FaReact, color: '#61dafb' },
    ],
  },
  {
    number: '02',
    label: 'SERVER SIDE',
    title: 'Backend Development',
    description:
      'Developing server-side logic, authentication and REST APIs to power complete web applications.',
    technologies: [
      { name: 'Node.js', icon: FaNodeJs, color: '#5fa04e' },
      { name: 'Express.js', icon: FaServer, color: '#cbd5e1' },
      { name: 'REST APIs', icon: FaCloud, color: '#a78bfa' },
    ],
  },
  {
    number: '03',
    label: 'DATA LAYER',
    title: 'Databases & Services',
    description:
      'Managing application data and integrating database and cloud services.',
    technologies: [
      { name: 'MySQL', icon: FaDatabase, color: '#4479a1' },
      { name: 'Firebase', icon: FaFire, color: '#ffca28' },
    ],
  },
  {
    number: '04',
    label: 'DEVELOPMENT WORKFLOW',
    title: 'Tools & Deployment',
    description:
      'Managing source code, testing APIs and deploying applications for real-world use.',
    technologies: [
      { name: 'Git', icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', icon: FaGithub, color: '#f8fafc' },
      { name: 'Vercel', icon: FaCloud, color: '#f8fafc' },
      { name: 'Postman', icon: FaPaperPlane, color: '#ff6c37' },
    ],
  },
]

const workflow = ['Frontend', 'Backend', 'Database', 'Deployment']

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      <div className="container">

        <div className="skills-intro">
          <div>
            <p className="skills-eyebrow">
              MY DEVELOPMENT TOOLKIT
            </p>

            <h2>
              The technology
              <br />
              behind <span>the work.</span>
            </h2>
          </div>

          <p className="skills-intro-text">
            From frontend interfaces to backend systems,
            databases and deployment, these are the technologies
            I use to build complete web solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-panel" key={group.number}>
              <div className="skill-panel-top">
                <span className="skill-panel-number">
                  {group.number}
                </span>

                <span className="skill-panel-label">
                  {group.label}
                </span>
              </div>

              <h3>{group.title}</h3>

              <p className="skill-panel-description">
                {group.description}
              </p>

              <div className="skill-technologies">
                {group.technologies.map((technology) => {
                  const TechnologyIcon = technology.icon

                  return (
                    <div
                      className="technology-item"
                      key={technology.name}
                    >
                      <span
                        className="technology-icon"
                        style={{ color: technology.color }}
                      >
                        <TechnologyIcon />
                      </span>

                      <span className="technology-name">
                        {technology.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-workflow">
          <div className="workflow-heading">
            <span>FULL-STACK DEVELOPMENT</span>
            <p>From an idea to a live product.</p>
          </div>

          <div className="workflow-steps">
            {workflow.map((step, index) => (
              <div className="workflow-step" key={step}>
                <span className="workflow-step-number">
                  0{index + 1}
                </span>

                <strong>{step}</strong>

                {index !== workflow.length - 1 && (
                  <span className="workflow-arrow">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
