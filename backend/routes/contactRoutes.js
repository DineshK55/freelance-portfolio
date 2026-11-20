
const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();


const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  message: {
    success: false,
    message: "Too many messages. Please try again after 15 minutes.",
  },
  standardHeaders: "draft-8",
  legacyHeaders: false,
});

router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
if (
  typeof name !== "string" ||
  typeof email !== "string" ||
  typeof subject !== "string" ||
  typeof message !== "string" ||
  !name.trim() ||
  !email.trim() ||
  !subject.trim() ||
  !message.trim()
) {
  return res.status(400).json({
    success: false,
    message: "Please fill in all fields correctly.",
  });
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email.trim())) {
  return res.status(400).json({
    success: false,
    message: "Please enter a valid email address.",
  });
}

if (
  name.length > 100 ||
  email.length > 254 ||
  subject.length > 150 ||
  message.length > 3000
) {
  return res.status(400).json({
    success: false,
    message: "Your submitted information is too long.",
  });
}

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to send your message. Please try again later.",
    });
  }
});

module.exports = router;
