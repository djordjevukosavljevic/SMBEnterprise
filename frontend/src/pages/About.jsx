import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function About() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    // Scroll per paragraph
    const scroll1 = useScroll({ target: ref1, offset: ["start end", "center center"] });
    const scroll2 = useScroll({ target: ref2, offset: ["start end", "center center"] });
    const scroll3 = useScroll({ target: ref3, offset: ["start end", "center center"] });

    // Map x to scroll, with spring for smoother motion
    const x1 = useSpring(useTransform(scroll1.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });
    const x2 = useSpring(useTransform(scroll2.scrollYProgress, [0, 1], ["100vw", "0vw"]), { damping: 20, stiffness: 120 });
    const x3 = useSpring(useTransform(scroll3.scrollYProgress, [0, 1], ["-100vw", "0vw"]), { damping: 20, stiffness: 120 });

    const opacity1 = useTransform(scroll1.scrollYProgress, [0, 0.7], [0, 1]);
    const opacity2 = useTransform(scroll2.scrollYProgress, [0, 0.7], [0, 1]);
    const opacity3 = useTransform(scroll3.scrollYProgress, [0, 0.7], [0, 1]);

    const paragraphStyle = {
        fontSize: "clamp(24px, 6vw, 48px)",
        fontWeight: "900",
        lineHeight: "1.5",
        textAlign: "center",
        marginBottom: "4rem",
    };

    return (
        <section id="about" className="container py-5">
            <h2 style={{ fontSize: "clamp(32px, 8vw, 64px)", fontWeight: "900", textAlign: "center", marginBottom: "6rem" }}>
                About <b>Isotherm</b>
            </h2>

            <motion.div ref={ref1} style={{ ...paragraphStyle, x: x1, opacity: opacity1 }}>
                Founded in 2008 in Paris, our company was built on a simple vision: to create spaces
                that combine strength, beauty, and functionality. Over the years, we’ve grown into a trusted construction partner.
            </motion.div>

            <motion.div ref={ref2} style={{ ...paragraphStyle, x: x2, opacity: opacity2 }}>
                We handle new builds, renovations, and transformations. Our engineers and architects work closely with clients to turn ideas into reality.
            </motion.div>

            <motion.div ref={ref3} style={{ ...paragraphStyle, x: x3, opacity: opacity3 }}>
                Every project reflects our dedication to quality, sustainability, and timeless design. With 15+ years of experience, we continue to build on trust and craftsmanship.
            </motion.div>
        </section>
    );
}
