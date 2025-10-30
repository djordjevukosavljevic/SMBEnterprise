import React from "react"
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../css/style.css";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footercontainer text-center mt-auto py-3">
            © {currentYear}, made with{" "}
            <i className="fa-solid fa-heart text-danger"></i> by{" "}
            <a
                href="https://github.com/djordjevukosavljevic"
                className="font-weight-bold text-decoration-none"
                target="_blank"
                rel="noopener noreferrer"
            >
                zorzezorz
            </a>{" "}
            for a better web.
        </footer>
    );
}