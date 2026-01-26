import React, { useState } from "react";

export default function Contact() {
    const initialState = {
        name: "",
        lastname: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const response = await fetch("http://localhost:8082/api/message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setFormData(initialState);
            alert(
                "Message sent! Thank you for contacting! Our team will get back to you as soon as possible."
            );

            window.location.href = "http://localhost:8083/#home";
        } catch (error) {
            alert("Error sending message");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="container py-5">
            <div className="container py-5">
                <div className="form-control p-4" style={{ fontSize: "20px" }}>
                    <h1 className="h3 text-center">
                        <b>Get in touch</b>
                    </h1>

                    <p>
                        Whether you’re planning a new project, need a quote, or have
                        any questions about our services, don’t hesitate to contact
                        us. Our team is ready to help you build with confidence and
                        experience.
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
                                    type="text"
                                    name="mobileNumber"
                                    className="form-control"
                                    placeholder="Contact number"
                                    value={formData.mobileNumber}
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
                            <button
                                type="submit"
                                className="btn btn-outline-dark btn-lg mx-2"
                                disabled={loading}
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className="spinner-border spinner-border-sm me-2"
                                            role="status"
                                            aria-hidden="true"
                                        ></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send <i className="fa-solid fa-envelope"></i>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
