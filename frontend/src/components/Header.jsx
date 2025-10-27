import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css"; // optional if you have your own styles

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-3" style={{ position: "relative" }}>
            <a className="navbar-brand" href="/">
                <i className="fa-solid fa-house"></i> Home
            </a>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul id="item-list" className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">
                            <i className="fa-solid fa-circle-info"></i> About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/services">
                            <i className="fa-solid fa-hammer"></i> Our services
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/image">
                            <i className="fa-solid fa-images"></i> Gallery
                        </a>
                    </li>

                    <form className="d-flex me-3">
                        <input
                            id="search-box"
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>

                    <li className="nav-item">
                        <a className="nav-link" href="/contact">
                            <i className="fa-solid fa-address-book"></i> Contact us
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/appointment">
                            <i className="fa-solid fa-calendar-days"></i> Appointments
                        </a>
                    </li>
                </ul>

                <div className="d-none d-lg-block">
                    <a href="/">
                        <img
                            src="../images/logo.svg"
                            alt="logo"
                            style={{
                                position: "absolute",
                                top: "-50px",
                                right: "10px",
                                height: "auto",
                                width: "200px",
                                zIndex: 1,
                            }}
                        />
                    </a>
                </div>
            </div>
        </nav>
    );
}

