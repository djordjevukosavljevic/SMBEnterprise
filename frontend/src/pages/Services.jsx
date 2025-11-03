import React from "react";

export default function Services() {
    return (
        <section id="services" className="container py-5">
            <h3 className="text-center mb-5">Our Services</h3>

            <div className="text-center mb-4" style={{ fontSize: "20px" }}>
                We provide a comprehensive range of construction services designed to meet the needs of both
                residential and commercial clients. From new builds and fit-outs to maintenance and repairs,
                our team ensures that every project is delivered with quality, efficiency, and precision.
            </div>

            <div className="text-center mb-5" style={{ fontSize: "20px" }}>
                <b>Services include:</b><br />
                Office & Retail Space Construction<br />
                Warehouses & Industrial Facilities<br />
                Interior Fit-Outs<br />
                Commercial Renovations<br />
                Building Expansions
            </div>

            <div className="row g-5">
                <div className="col-md-6">
                    <div>
                        <h5>🏗️ <b>Residential Construction</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            From the ground up, we build beautiful, durable homes tailored to your lifestyle
                            and vision. Whether you're building your first home, expanding your living space,
                            or upgrading with a full renovation, we bring your dream to life with expert
                            craftsmanship and attention to detail.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <h5>🏢 <b>Commercial Construction</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            We create spaces that support your business goals — on time and within budget.
                            Our commercial services are ideal for retail, office, hospitality, and industrial
                            projects, providing functionality, safety, and lasting value.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <h5>🛠️ <b>General Contracting</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            As your full-service contractor, we manage all aspects of the construction process —
                            coordinating labor, materials, schedules, and budgets. We ensure every phase runs
                            smoothly from start to finish.
                        </p>
                        <p style={{ fontSize: "18px" }}>
                            <b>Our general contracting covers:</b><br />
                            Project Planning & Cost Estimation<br />
                            Permit & Regulation Management<br />
                            Subcontractor Coordination<br />
                            Site Supervision & Quality Control
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <h5>🌍 <b>Design & Build</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            We simplify the process by combining architecture, engineering, and construction into
                            a single seamless service — one team, one contract, full accountability.
                        </p>
                        <p style={{ fontSize: "18px" }}>
                            <b>What you get:</b><br />
                            A single point of contact<br />
                            Streamlined communication<br />
                            Faster project delivery<br />
                            Unified design and construction teams
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <h5>🚧 <b>Site Preparation & Groundwork</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            Every great project starts with a strong foundation. We offer excavation, land
                            clearing, grading, drainage, and all necessary groundwork to prepare your site for
                            safe and efficient construction.
                        </p>
                    </div>
                </div>

                <div className="col-md-6">
                    <div>
                        <h5>🔧 <b>Maintenance & Repairs</b></h5>
                        <p style={{ fontSize: "18px" }}>
                            Even after the build is complete, we’re here to help maintain your property’s value
                            and safety with timely repairs and ongoing maintenance solutions.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}