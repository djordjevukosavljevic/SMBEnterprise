import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Appoinmtent from "./pages/Appointment";
import Reviews from "./pages/Reviews";

function App() {
    return (
        <>
            <div className="wallpaper"></div>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-fill">
                    <Home />
                    <About />
                    <Services />
                    <Gallery />
                    <Contact /> 
                    <Appoinmtent />
                    <Reviews />
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;