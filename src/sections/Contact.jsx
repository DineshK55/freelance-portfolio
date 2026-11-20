import { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaPaperPlane,
} from 'react-icons/fa'

import './Contact.css'

function Contact() {

const [formStatus, setFormStatus] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);
  setFormStatus("");

  const formData = new FormData(e.target);

  const contactData = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    setFormStatus("Message sent successfully!");
    e.target.reset();
  } catch (error) {
    setFormStatus(error.message || "Something went wrong. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="contact" id="contact">
      <div className="container">

        <div className="contact-intro">
          <div>
            <p className="contact-eyebrow">GET IN TOUCH</p>

            <h2>
              Let's build something
              <br />
              <span>meaningful together.</span>
            </h2>
          </div>

          <p className="contact-intro-text">
            Have a website or application idea?
            Let's discuss your requirements and
            turn them into a practical digital solution.
          </p>
        </div>

        <div className="contact-layout">

          <div className="contact-details-panel">
            <span className="contact-panel-label">
              LET'S CONNECT
            </span>

            <h3>
              Let's discuss
              <span>your project.</span>
            </h3>

            <p className="contact-info-description">
              I'm available for freelance web development
              projects, business websites and full-stack
              application development.
            </p>

            <div className="contact-methods">

              <a
                href="mailto:arasudinesh230@gmail.com"
                className="contact-method"
              >
                <span className="contact-method-icon">
                  <FaEnvelope />
                </span>

                <span className="contact-method-text">
                  <small>EMAIL ADDRESS</small>
                  <strong>arasudinesh230@gmail.com</strong>
                </span>

                <FaExternalLinkAlt className="contact-method-arrow" />
              </a>

              <div className="contact-method">
                <span className="contact-method-icon">
                  <FaMapMarkerAlt />
                </span>

                <span className="contact-method-text">
                  <small>LOCATION</small>
                  <strong>Tamil Nadu, India</strong>
                </span>
              </div>

            </div>

            <div className="contact-availability">
              <span className="availability-dot"></span>
              Available for freelance projects
            </div>
          </div>

          <div className="contact-form-panel">

            <div className="contact-form-heading">
              <span>START A CONVERSATION</span>
              <h3>Tell me about your project</h3>
              <p>
                Share a few details about your idea.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  placeholder="What is your project about?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Project Details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your requirements..."
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="contact-submit" disabled={isSubmitting}>
  {isSubmitting ? "Sending..." : "Send Message"}
  <FaPaperPlane />
</button>

{formStatus && (
  <p className={`form-status ${formStatus.includes("successfully") ? "success" : "error"}`}>
    {formStatus}
  </p>
)}

              

            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact
