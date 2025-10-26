import React from "react"
import { Link } from "react-router-dom";
import "../css/style.css";

export default function Header() {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light px-3" style="position: relative;">
                <a class="navbar-brand" href="/"><i class="fa-solid fa-house"></i> Home</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="item-list" class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/about"><i class="fa-solid fa-circle-info"></i> About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/services"><i class="fa-solid fa-hammer"></i> Our services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/image" asp-controller="Image"><i class="fa-solid fa-images"></i>
                                Gallery</a>
                        </li>
                        <form class="d-flex me-3">
                            {/* <input id="search-box" class="form-control me-2" type="search" placeholder="Search" aria-label="Search"> */}
                        </form>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact"><i class="fa-solid fa-address-book"></i> Contact us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/appointment" asp-controller="Appointment"> <i
                                class="fa-solid fa-calendar-days"></i>
                                Appointments</a>
                        </li>
                    </ul>
                    <div class="d-none d-lg-block">
                        <a href="/">
                            {/* <img th:src="@{/images/logo.svg}" alt="logo"
                                style="position: absolute; top: -50px; right: 10px; height: auto; width: 200px; z-index: 1;"> */}
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}