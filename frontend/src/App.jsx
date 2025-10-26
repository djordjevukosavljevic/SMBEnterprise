import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";


function App(){
    return (
        <Header />
        // <Router>
        //     <Header />
        //     <Routes>
        //         <Route path="" element={<Home />}/>

        //     </Routes>
        //     <Footer />
        // </Router>
    );
}