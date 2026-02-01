import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Services() {
  // refs for intro and list
  const introRef = useRef(null);
  const listRef = useRef(null);

  // refs for each card
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  // Scroll transforms for intro
  const introScroll = useScroll({ target: introRef, offset: ["start end", "center center"] });
  const introX = useSpring(useTransform(introScroll.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const introOpacity = useTransform(introScroll.scrollYProgress, [0, 0.7], [0, 1]);

  // Scroll transforms for list
  const listScroll = useScroll({ target: listRef, offset: ["start end", "center center"] });
  const listX = useSpring(useTransform(listScroll.scrollYProgress, [0, 1], ["100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const listOpacity = useTransform(listScroll.scrollYProgress, [0, 0.7], [0, 1]);

  // Scroll transforms for each card
  const card1Scroll = useScroll({ target: card1Ref, offset: ["start end", "center center"] });
  const card1X = useSpring(useTransform(card1Scroll.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card1Opacity = useTransform(card1Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const card2Scroll = useScroll({ target: card2Ref, offset: ["start end", "center center"] });
  const card2X = useSpring(useTransform(card2Scroll.scrollYProgress, [0, 1], ["100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card2Opacity = useTransform(card2Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const card3Scroll = useScroll({ target: card3Ref, offset: ["start end", "center center"] });
  const card3X = useSpring(useTransform(card3Scroll.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card3Opacity = useTransform(card3Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const card4Scroll = useScroll({ target: card4Ref, offset: ["start end", "center center"] });
  const card4X = useSpring(useTransform(card4Scroll.scrollYProgress, [0, 1], ["100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card4Opacity = useTransform(card4Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const card5Scroll = useScroll({ target: card5Ref, offset: ["start end", "center center"] });
  const card5X = useSpring(useTransform(card5Scroll.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card5Opacity = useTransform(card5Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const card6Scroll = useScroll({ target: card6Ref, offset: ["start end", "center center"] });
  const card6X = useSpring(useTransform(card6Scroll.scrollYProgress, [0, 1], ["100vw", "0vw"]), { damping: 20, stiffness: 120 });
  const card6Opacity = useTransform(card6Scroll.scrollYProgress, [0, 0.7], [0, 1]);

  const paragraphStyle = {
    fontSize: "clamp(20px, 5vw, 32px)",
    fontWeight: "900",
    textAlign: "center",
    marginBottom: "3rem",
  };

  return (
    <section id="services" className="container py-5">
      <h2 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "900", textAlign: "center", marginBottom: "6rem" }}>
        Our <b>Services</b>
      </h2>

      <motion.div ref={introRef} style={{ ...paragraphStyle, x: introX, opacity: introOpacity }}>
        We provide a comprehensive range of construction services designed to meet the needs of both
        residential and commercial clients. From new builds and fit-outs to maintenance and repairs,
        our team ensures quality, efficiency, and precision.
      </motion.div>

      <motion.div ref={listRef} style={{ ...paragraphStyle, x: listX, opacity: listOpacity }}>
        <b>Services include:<br />
        Office & Retail Space Construction<br />
        Warehouses & Industrial Facilities<br />
        Interior Fit-Outs<br />
        Commercial Renovations<br />
        Building Expansions</b>
      </motion.div>

      <div className="row g-5">
        <div className="col-md-6">
          <motion.div ref={card1Ref} style={{ x: card1X, opacity: card1Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🏗️ <b>Residential Construction</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>From the ground up, we build beautiful, durable homes tailored to your lifestyle and vision.</p>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div ref={card2Ref} style={{ x: card2X, opacity: card2Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🏢 <b>Commercial Construction</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>We create spaces that support your business goals — on time and within budget.</p>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div ref={card3Ref} style={{ x: card3X, opacity: card3Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🛠️ <b>General Contracting</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>We manage all aspects of the construction process — coordinating labor, materials, schedules, and budgets.</p>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div ref={card4Ref} style={{ x: card4X, opacity: card4Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🌍 <b>Design & Build</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>We combine architecture, engineering, and construction into a single seamless service.</p>
          </motion.div>
        </div>
        <div className="col-md-6" >
          <motion.div ref={card5Ref} style={{ x: card5X, opacity: card5Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🚧 <b>Site Preparation & Groundwork</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>Excavation, grading, drainage, and all groundwork to prepare your site for safe and efficient construction.</p>
          </motion.div>
        </div>
        <div className="col-md-6">
          <motion.div ref={card6Ref} style={{ x: card6X, opacity: card6Opacity }}>
            <h5 style={{ fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 900 }}>🔧 <b>Maintenance & Repairs</b></h5>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700 }}>Timely repairs and ongoing maintenance solutions to keep your property safe and valuable.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
