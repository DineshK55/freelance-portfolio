
import {
  FaLaptopCode,
  FaCode,
  FaServer,
  FaLayerGroup,
  FaTools,
  FaRocket,
} from 'react-icons/fa'

import './Services.css'

const services = [
  {
    number: '01',
    icon: FaLaptopCode,
    title: 'Business Website Development',
    description:
      'Professional, responsive websites that help businesses build their online presence and connect with customers.',
    tags: ['Business Websites', 'Responsive Design'],
  },
  {
    number: '02',
    icon: FaCode,
    title: 'Frontend Development',
    description:
      'Modern user interfaces with clean layouts, interactive elements and smooth experiences across devices.',
    tags: ['React.js', 'JavaScript', 'CSS3'],
  },
  {
    number: '03',
    icon: FaServer,
    title: 'Backend Development',
    description:
      'Server-side functionality, REST APIs and authentication to support reliable web applications.',
    tags: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    number: '04',
    icon: FaLayerGroup,
    title: 'Full-Stack Development',
    description:
      'Complete web applications connecting frontend interfaces, backend logic and databases.',
    tags: ['React', 'Node.js', 'MySQL'],
  },
  {
    number: '05',
    icon: FaTools,
    title: 'Website Maintenance',
    description:
      'Website updates, content changes, bug fixes and improvements to keep your website running smoothly.',
    tags: ['Bug Fixes', 'Updates', 'Improvements'],
  },
  {
    number: '06',
    icon: FaRocket,
    title: 'Deployment & Launch',
    description:
      'Preparing websites for production and deploying them so customers can access them online.',
    tags: ['Vercel', 'GitHub', 'Launch'],
  },
]

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-glow services-glow-one"></div>
      <div className="services-glow services-glow-two"></div>

      <div className="container">

        <div className="services-intro">
          <div>
            <p className="services-eyebrow">
              WHAT I CAN DO FOR YOU
            </p>

            <h2>
              Services built
              <br />
              for <span>your business.</span>
            </h2>
          </div>

          <p className="services-intro-text">
            From business websites to complete full-stack
            applications, I help turn your requirements into
            practical digital solutions.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const ServiceIcon = service.icon

            return (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-icon">
                    <ServiceIcon />
                  </span>
                </div>

                <h3>{service.title}</h3>

                <p className="service-description">
                  {service.description}
                </p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href="#contact" className="service-link">
                  Discuss this service
                  <span>↗</span>
                </a>
              </article>
            )
          })}
        </div>

        <div className="services-cta">
          <div>
            <span>HAVE A PROJECT IN MIND?</span>
            <h3>Let's build something useful together.</h3>
          </div>

          <a href="#contact">
            Start a conversation
            <span>↗</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services
