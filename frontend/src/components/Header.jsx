import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3" style={{ position: "relative" }}>
      {/* Brand / Home */}
      <Link className="navbar-brand" to="/">
        <i className="fa-solid fa-house"></i> Home
      </Link>

      {/* Navbar toggle for small screens */}
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

      {/* Collapsible section */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="item-list" className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              <i className="fa-solid fa-circle-info"></i> About
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/services">
              <i className="fa-solid fa-hammer"></i> Our Services
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/image">
              <i className="fa-solid fa-images"></i> Gallery
            </Link>
          </li>

          {/* Search bar */}
          <form className="d-flex me-3">
            <input
              id="search-box"
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            //   onChange={(e) => handleSearch(e)}
            />
          </form>

          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              <i className="fa-solid fa-address-book"></i> Contact Us
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/appointment">
              <i className="fa-solid fa-calendar-days"></i> Appointments
            </Link>
          </li>
        </ul>

        {/* Logo */}
        <div className="d-none d-lg-block">
          <Link to="/">
            <img
              src="/images/logo.svg"
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
          </Link>
        </div>
      </div>
    </nav>
  );
}

// 🔍 Simple search handler (optional)
// function handleSearch(e) {
//   const query = e.target.value.toLowerCase();
//   const items = document.querySelectorAll("#item-list li");

//   items.forEach((item) => {
//     const text = item.textContent.toLowerCase();
//     item.style.display = text.includes(query) ? "block" : "none";
//   });
// }

export default Header;
