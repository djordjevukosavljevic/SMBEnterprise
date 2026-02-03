// ScrollText.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollText({ children, direction = "left" }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const x = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        direction === "left" ? [-120, 0, -120] : [120, 0, 120]
    );

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 1, 1]);

    return (
        <motion.div ref={ref} style={{ x, opacity }}>
            {children}
        </motion.div>
    );
}
