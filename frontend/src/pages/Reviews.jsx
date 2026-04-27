import React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Reviews() {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);

    const scroll1 = useScroll({ target: ref1, offset: ["start end", "center center"] });
    const scroll2 = useScroll({ target: ref2, offset: ["start end", "center center"] });
    const scroll3 = useScroll({ target: ref3, offset: ["start end", "center center"] });

    const springConfig = { damping: 15, stiffness: 180 };

    const x1 = useSpring(useTransform(scroll1.scrollYProgress, [0, 0.8], ["-100vw", "0vw"]), springConfig);
    const x2 = useSpring(useTransform(scroll2.scrollYProgress, [0, 0.8], ["100vw", "0vw"]), springConfig);
    const x3 = useSpring(useTransform(scroll3.scrollYProgress, [0, 0.8], ["-100vw", "0vw"]), springConfig);

    const opacity1 = useTransform(scroll1.scrollYProgress, [0, 0.7], [0, 1]);
    const opacity2 = useTransform(scroll2.scrollYProgress, [0, 0.7], [0, 1]);
    const opacity3 = useTransform(scroll3.scrollYProgress, [0, 0.7], [0, 1]);

    const paragraphStyle = {
        fontSize: "clamp(20px, 6vw, 32px)",
        fontWeight: "900",
        lineHeight: "1.5",
        textAlign: "center",
        marginBottom: "4rem",
    };

    return (
        <section id="reviews" className="container py-5">
            <h2  style={{
                    fontSize: "clamp(26px, 8vw, 32px)",
                    fontWeight: "900",
                    textAlign: "center",
                    marginBottom: "6rem",
                }}>Our grades by customers</h2>


            <motion.div ref={ref1} style={{ ...paragraphStyle, x: x1, opacity: opacity1 }}>
                Nunc ut bibendum purus, a aliquam ligula. Quisque tellus orci, pharetra et placerat feugiat, facilisis eu sapien. Fusce ac semper risus.
                Aliquam sollicitudin orci neque, pharetra pellentesque magna vulputate a. Ut quis arcu quis augue sollicitudin consequat eget a risus.
                Fusce mattis, felis rhoncus mollis imperdiet, augue mauris bibendum ligula, sit amet varius velit felis vel elit. Vestibulum auctor orci id ante condimentum pulvinar.
                Phasellus eget mollis felis, eu ornare purus.
            </motion.div>


            <motion.div ref={ref2} style={{ ...paragraphStyle, x: x2, opacity: opacity2 }}>
                Nunc ut bibendum purus, a aliquam ligula. Quisque tellus orci, pharetra et placerat feugiat, facilisis eu sapien. Fusce ac semper risus.
                Aliquam sollicitudin orci neque, pharetra pellentesque magna vulputate a. Ut quis arcu quis augue sollicitudin consequat eget a risus.
                Fusce mattis, felis rhoncus mollis imperdiet, augue mauris bibendum ligula, sit amet varius velit felis vel elit. Vestibulum auctor orci id ante condimentum pulvinar.
                Phasellus eget mollis felis, eu ornare purus.
            </motion.div>


             <motion.div ref={ref3} style={{ ...paragraphStyle, x: x3, opacity: opacity3 }}>
                Nunc ut bibendum purus, a aliquam ligula. Quisque tellus orci, pharetra et placerat feugiat, facilisis eu sapien. Fusce ac semper risus.
                Aliquam sollicitudin orci neque, pharetra pellentesque magna vulputate a. Ut quis arcu quis augue sollicitudin consequat eget a risus. 
                Fusce mattis, felis rhoncus mollis imperdiet, augue mauris bibendum ligula, sit amet varius velit felis vel elit. Vestibulum auctor orci id ante condimentum pulvinar.
                 Phasellus eget mollis felis, eu ornare purus.
            </motion.div>
        </section>
    );
}