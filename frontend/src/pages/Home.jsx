import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      id="home"
      className="container py-5 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1
        style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
        className="text-uppercase mb-3"
      >
        Welcome to <b>Isotherm Construction</b>
      </h1>

      <h2
        style={{ fontSize: "clamp(28px, 4.5vw, 48px)" }}
        className="mb-5"
      >
        Building Excellence from the Ground Up
      </h2>

      <div
        style={{
          fontSize: "clamp(20px, 3vw, 26px)",
          lineHeight: 1.9,
          textAlign: "justify",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <p>
          At Isotherm Construction, we believe every project begins with a vision — a unique idea
          that deserves to be brought to life with care, precision, and expertise. Since our founding,
          we’ve dedicated ourselves to building spaces that reflect both form and function, ensuring
          every structure we create stands the test of time.
        </p>

        <p>
          Our team of engineers, architects, and construction professionals work hand-in-hand to
          transform concepts into reality. From residential homes and modern apartments to complex
          commercial facilities, we approach every project with the same commitment to quality,
          safety, and innovation.
        </p>

        <p>
          We take pride in combining technical excellence with creative solutions, delivering results
          that not only meet expectations — but exceed them. Whether it’s a new build, renovation,
          or expansion, our process is transparent, collaborative, and focused on your goals from
          start to finish.
        </p>

        <p>
          At Isotherm, we don’t just construct buildings — we create environments where people live,
          work, and grow. With a proven track record of success and more than 15 years of experience,
          we continue to shape the future of construction with trust, integrity, and craftsmanship.
        </p>
      </div>

      <div className="mt-5 d-flex justify-content-center flex-wrap gap-3">
        <a href="#services" className="btn btn-dark btn-lg px-5 py-3">
          Explore Our Services
        </a>
        <a href="#contact" className="btn btn-outline-dark btn-lg px-5 py-3">
          Get in Touch
        </a>
        <a href="#appointment" className="btn btn-outline-dark btn-lg px-5 py-3">
          Book an Appointment
        </a>
      </div>
    </motion.section>
  );
}
