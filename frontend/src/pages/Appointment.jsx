import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // enables selectable
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { bookFunction } from "../js/appointment.js";

export default function Appoinmtent() {
    const initialState = {
        name: "",
        lastname: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
        datecreated: "",
        isActive: "",
        isTaken: ""
    }

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        email: "",
        mobileNumber: "",
        subject: "",
        message: "",
        datecreated: "",
        isActive: "",
        isTaken: ""
    });

    const handleChange = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8082/api/appointment", {
                method: "POST",
                headers:{ 
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if(!response.ok){
                    throw new Error("Failed to send message");
                }

                setFormData(initialState);
                window.location.href = "http://localhost:8083/#home"

        } catch(error){
            alert("Error sending message.");
            console.error(error);
        }
    };
    return (
        <section id="appointment" className="containet py-5">
            <div className="container mt-4 mb-5">
                <h2 className="text-center mb-4">Book an Appointment</h2>

                <div className="card shadow-sm p-3 mb-4">
                    <FullCalendar
                        // ref={calendarRef}
                        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
                        initialView="listDay"
                        themeSystem="bootstrap5"
                        editable={true}
                        selectable={true}
                        height="400px"
                    />
                    <div className="text-center">
                        <br /><button onClick={bookFunction} id="bookbtn" type="submit" className="btn btn-outline-dark btn-lg mx-2">
                            Book <i className="fa-solid fa-envelope"></i>
                        </button>

                    </div>

                </div>


                {/* <form id="bookform" onSubmit={handleSubmit} className="text-center">
                    <button
                        id="bookbtn"
                        type="submit"
                        className="btn btn-info"
                        style={{ width: "200px" }}
                    >
                        Book an appointment
                    </button>
                </form> */}
            </div>
        </section>

    );
}