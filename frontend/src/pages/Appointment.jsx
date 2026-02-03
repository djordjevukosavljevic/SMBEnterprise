import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Appointment() {
  const initialState = {
    name: "",
    lastname: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
    dateCreatedAt: "",
    dateCreatedFor: "",
    isActive: true,
    isTaken: false,
  };

  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // <<< NEW: toast state
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  // <<< NEW: show toast function
  const showToast = (message, type = "success", duration = 5000) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), duration);
  };

  // Handle booking submission
  const handleBook = async () => {
    if (loading) return;
    if (!formData.dateCreatedFor) {
      showToast("Please select a date first!", "error");
      return;
    }

    setLoading(true);

    try {
      console.log("Sending appointment data", formData);
      const response = await fetch("http://localhost:8082/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Booking failed");

      setFormData(initialState);
      showToast("Appointment booked successfully!", "success");

      // Redirect after short delay to allow toast to show
      setTimeout(() => {
        window.location.href = "http://localhost:8083/#home";
      }, 2000);

    } catch (error) {
      console.error(error);
      showToast("Error booking appointment. Please get in touch.", "error");

      setTimeout(() => {
        window.location.href = "http://localhost:8083/#contact";
      }, 2500);

    } finally {
      setLoading(false);
    }
  };

  // Handle date selection from calendar
  const handleDateSelect = (info) => {
    setFormData((prev) => ({ ...prev, dateCreatedFor: info.startStr }));
    setShowModal(false);
  };

  return (
    <section id="appointment" className="container py-5">
      <h2 className="text-center mb-4 text-black">Book an Appointment</h2>

      {/* Form Card */}
      <div
        className="card shadow-lg p-4 mb-5"
        style={{ backgroundColor: "rgba(255,255,255,0.9)", borderRadius: "15px", position: "relative" }} // <<< added relative for toast
      >
        {/* Select Date Button */}
        <div className="mb-3 text-center">
          <Button
            variant="outline-dark"
            size="lg"
            onClick={() => setShowModal(true)}
          >
            {formData.dateCreatedFor
              ? `Selected Date: ${formData.dateCreatedFor}`
              : "Select Date"}
            <i className="fa-solid fa-calendar-days ms-2"></i>
          </Button>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={(e) =>
                setFormData({ ...formData, lastname: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
              value={formData.mobileNumber}
              onChange={(e) =>
                setFormData({ ...formData, mobileNumber: e.target.value })
              }
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />
        </div>

        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>

        <div className="text-center">
          <Button
            variant="outline-dark"
            size="lg"
            onClick={handleBook}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Scheduling...
              </>
            ) : (
              <>
                Schedule<i className="fa-solid fa-calendar-check ms-2"></i>
              </>
            )}
          </Button>
        </div>

        {/* <<< NEW: inline toast notification */}
        {toast.show && (
          <div
            style={{
              marginTop: "15px",
              padding: "12px 18px",
              backgroundColor: toast.type === "success" ? "#d4edda" : "#f8d7da",
              color: toast.type === "success" ? "#155724" : "#721c24",
              border: `1px solid ${toast.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
              borderRadius: "5px",
              fontWeight: "500",
              textAlign: "center",
              opacity: toast.show ? 1 : 0,
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transform: toast.show ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            {toast.message}
          </div>
        )}
      </div>

      {/* Calendar Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Select a Date</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FullCalendar
            plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            selectable={true}
            height="500px"
            select={handleDateSelect}
          />
        </Modal.Body>
      </Modal>
    </section>
  );
}
