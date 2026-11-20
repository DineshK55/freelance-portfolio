import './Footer.css'


function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-content">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Dinesh K<span>.</span>
            </a>

            <p>
              Freelance Full-Stack Web Developer
              building modern and functional web
              applications for businesses.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              GitHub
            </a>

            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Dinesh K. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
