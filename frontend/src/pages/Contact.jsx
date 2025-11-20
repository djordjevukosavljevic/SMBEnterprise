import React, { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        contactNumber: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: add email submission logic here (e.g., via API)
        console.log(formData);
        alert("Message sent!");
        window.location.href = "http://localhost:8083/#home"; 
    };

    return (
        <section id="contact" className="container py-5">
            <div className="container py-5">
                <div className="form-control p-4" style={{ fontSize: "20px" }}>
                <h1 className="h3 text-center"><b>Get in touch</b></h1>
                    <p>
                        Whether you’re planning a new project, need a quote, or have any questions about
                        our services, don’t hesitate to contact us. Our team is ready to help you build
                        with confidence and experience.
                    </p>
                    <p>
                        We are available 24/7 via email to assist you with any questions, concerns, or
                        inquiries. You can also reach us by filling out the quick contact form below,
                        and a member of our team will get back to you as soon as possible. If you prefer
                        to speak with us in person, feel free to visit our office during business hours
                        at the address provided. We look forward to hearing from you and are committed
                        to providing prompt and helpful support.
                    </p>

                    <form id="contactForm" onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="First name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="text"
                                    name="lastname"
                                    className="form-control"
                                    placeholder="Last name"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="number"
                                    name="contactNumber"
                                    className="form-control"
                                    placeholder="Contact number"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                name="subject"
                                className="form-control"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="6"
                                placeholder="Enter your message here"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-info px-4">
                                Send <i className="fa-solid fa-envelope"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
