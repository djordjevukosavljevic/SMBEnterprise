import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
    return (
        <>
            <div className="wallpaper"></div>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-fill">
                    <Home />
                    <About />
                    <Contact /> 
                </main>
                <Footer />
            </div>
        </>
    );
}

export default App;