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
            <div class="container py-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-10 col-xl-8 text-center">
                        <h3 class="fw-bold mb-4">Testimonials</h3>
                        <p class="mb-4 pb-2 mb-md-5 pb-md-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur veniam.
                        </p>
                    </div>
                </div>
            </div>

            <motion.div ref={ref1} style={{ ...paragraphStyle, x: x1, opacity: opacity1 }}>
                <h5 class="font-weight-bold">Teresa May</h5>
                <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li>
                        <i class="fa-sharp fa-solid fa-star text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star-half-alt fa-sm text-info"></i>
                    </li>
                </ul>
                <p class="mb-2">
                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                </p>
            </motion.div>


            <motion.div ref={ref2} style={{ ...paragraphStyle, x: x2, opacity: opacity2 }}>
                <h5 class="font-weight-bold">Teresa May</h5>
                <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star-half-alt fa-sm text-info"></i>
                    </li>
                </ul>
                <p class="mb-2">
                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                </p>
            </motion.div>


            <motion.div ref={ref3} style={{ ...paragraphStyle, x: x3, opacity: opacity3 }}>
                <h5 class="font-weight-bold">Teresa May</h5>
                <h6 class="font-weight-bold my-3">Founder at ET Company</h6>
                <ul class="list-unstyled d-flex justify-content-center">
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star fa-sm text-info"></i>
                    </li>
                    <li>
                        <i class="fas fa-star-half-alt fa-sm text-info"></i>
                    </li>
                </ul>
                <p class="mb-2">
                    <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                    ad velit ab hic tenetur.
                </p>
            </motion.div>
        </section>
    );
}