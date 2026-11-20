
import { useEffect, useRef } from 'react'
import './About.css'

const developmentSteps = [
  {
    number: '01',
    title: 'Understand the idea',
    description:
      'I start by understanding the business goals, requirements and problems the website needs to solve.',
  },
  {
    number: '02',
    title: 'Design and develop',
    description:
      'I build responsive user interfaces and connect the required backend functionality and database features.',
  },
  {
    number: '03',
    title: 'Test and deliver',
    description:
      'I test the website across screen sizes, fix issues and prepare the project for deployment.',
  },
]

function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const elements = aboutRef.current?.querySelectorAll('.about-reveal')

    if (!elements?.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-glow about-glow-one"></div>
      <div className="about-glow about-glow-two"></div>

      <div className="container">
        <div className="about-layout">

          <div className="about-intro about-reveal">
            <p className="about-eyebrow">
              A LITTLE ABOUT ME
            </p>

            <h2>
              Turning ideas into
              <span> digital solutions.</span>
            </h2>

            <p className="about-description">
              I'm Dinesh K, a freelance full-stack web developer
              from Tamil Nadu, India. I enjoy building websites
              and web applications that are useful, responsive
              and easy to use.
            </p>

            <p className="about-description">
              I work across frontend and backend development,
              connecting user interfaces, application logic and
              databases to create complete web solutions. My
              focus is on understanding what a business needs
              and building a practical solution around it.
            </p>

            <a href="#contact" className="about-contact-link">
              Let's work together
              <span>↗</span>
            </a>
          </div>

          <div className="about-process about-reveal">
            <div className="about-process-header">
              <span>MY APPROACH</span>
              <span className="about-process-count">01 — 03</span>
            </div>

            <h3>How I approach development</h3>

            <div className="about-process-list">
              {developmentSteps.map((step, index) => (
                <div
                  className="about-process-item"
                  key={step.number}
                  style={{ '--step-index': index }}
                >
                  <span className="about-step-number">
                    {step.number}
                  </span>

                  <div className="about-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-process-footer">
              <span>FROM IDEA</span>
              <span className="about-process-line"></span>
              <span>TO DEPLOYMENT</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
