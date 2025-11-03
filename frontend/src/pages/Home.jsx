import React from "react";

export default function Home() {
    console.log("rendered home");
    return (
        <section id="home" className="container py-5 text-center">
            <h6 className="text-uppercase text-muted mb-3">Welcome to Isotherm Construction</h6>
            <h1 className="mb-4">Building Excellence from the Ground Up</h1>

            <div style={{ fontSize: "20px" }}>
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

            <div className="mt-4">
                <a href="#services" className="btn btn-dark btn-lg mx-2">Explore Our Services</a>
                <a href="#contact" className="btn btn-outline-dark btn-lg mx-2">Get in Touch</a>
                <a href="#appointment" className="btn btn-outline-dark btn-lg mx-2">Book an appointment</a>
            </div>
        </section>
    );
}