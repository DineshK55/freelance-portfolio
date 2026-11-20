
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa'

import {
  SiExpress,
  SiMysql,
  SiFirebase,
} from 'react-icons/si'

import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-wrapper">

          {/* HERO CONTENT */}
          <div className="hero-content">
            <p className="hero-eyebrow">
              <span className="hero-status-dot"></span>
              FREELANCE FULL-STACK WEB DEVELOPER
            </p>

            <h1>
              I Build Digital
              <span> Experiences </span>
              That Help Businesses Grow.
            </h1>

            <p className="hero-description">
              I design and develop modern, responsive websites
              and full-stack web applications that turn business
              ideas into practical digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="hero-primary-btn">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="hero-secondary-btn">
                Let's Discuss Your Project
              </a>
            </div>

            <div className="hero-technologies">
              <span>Working with</span>
              <p>React.js</p>
              <p>Node.js</p>
              <p>MySQL</p>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            {/* ORBITAL TECHNOLOGY SYSTEM */}
            <div className="hero-orbit-system" aria-hidden="true">

              <div className="orbit-ring orbit-ring-one"></div>
              <div className="orbit-ring orbit-ring-two"></div>
              <div className="orbit-ring orbit-ring-three"></div>

              <div className="orbit-path orbit-path-react">
                <span className="orbit-icon orbit-react">
                  <FaReact />
                </span>
              </div>

              <div className="orbit-path orbit-path-javascript">
                <span className="orbit-icon orbit-javascript">
                  <FaJs />
                </span>
              </div>

              <div className="orbit-path orbit-path-node">
                <span className="orbit-icon orbit-node">
                  <FaNodeJs />
                </span>
              </div>

              <div className="orbit-path orbit-path-express">
                <span className="orbit-icon orbit-express">
                  <SiExpress />
                </span>
              </div>

              <div className="orbit-path orbit-path-mysql">
                <span className="orbit-icon orbit-mysql">
                  <SiMysql />
                </span>
              </div>

              <div className="orbit-path orbit-path-firebase">
                <span className="orbit-icon orbit-firebase">
                  <SiFirebase />
                </span>
              </div>

              <div className="orbit-path orbit-path-git">
                <span className="orbit-icon orbit-git">
                  <FaGitAlt />
                </span>
              </div>

              <div className="orbit-path orbit-path-github">
                <span className="orbit-icon orbit-github">
                  <FaGithub />
                </span>
              </div>

            </div>

            {/* AMBIENT GLOW */}
            <div className="hero-glow"></div>

            {/* DEVELOPER CODE CARD */}
            <div className="hero-code-card">
              <div className="code-card-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>developer.js</p>
              </div>

              <div className="code-card-body">
                <p>
                  <span className="code-purple">const</span> developer = {'{'}
                </p>

                <p className="code-indent">
                  name: <span className="code-green">'Dinesh K'</span>,
                </p>

                <p className="code-indent">
                  role: <span className="code-green">'Full-Stack Developer'</span>,
                </p>

                <p className="code-indent">
                  frontend: <span className="code-green">'React'</span>,
                </p>

                <p className="code-indent">
                  backend: <span className="code-green">'Node.js'</span>,
                </p>

                <p className="code-indent">
                  database: <span className="code-green">'MySQL'</span>
                </p>

                <p>{'}'}</p>

                <div className="code-divider"></div>

                <p>
                  <span className="code-purple">developer</span>.
                  <span className="code-blue">build</span>
                  (<span className="code-green">'Your Idea'</span>)
                </p>

                <p className="code-cursor">_</p>
              </div>
            </div>

            {/* FLOATING SERVICE CARDS */}
            <div className="hero-floating-card hero-card-top">
              <span>01</span>

              <div>
                <strong>Frontend</strong>
                <small>Modern UI Development</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <span>02</span>

              <div>
                <strong>Backend</strong>
                <small>APIs & Database</small>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
