import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"; // enables selectable
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { bookFunction } from "../js/appointment";

export default function Appoinmtent() {
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
                        <br/><button id="bookbtn" type="submit" className="btn btn-info px-4">
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