import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Games from "./components/Games";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Office from "./components/Office";
import PhotoAndVideo from "./components/PhotoAndVideo";
import Smartphone from "./components/Smartphone";
import ThankYou from "./components/ThankYou";
import TvAndAudio from "./components/TvAndAudio";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/office" element={<Office />} />
                <Route exact path="/smartphone" element={<Smartphone />} />
                <Route exact path="/tv-and-audio" element={<TvAndAudio />} />
                <Route
                    exact
                    path="/photo-and-video"
                    element={<PhotoAndVideo />}
                />
                <Route exact path="/games" element={<Games />} />
                <Route exact path="/offers" element={<Offers />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/thank-you" element={<ThankYou />} />
            </Routes>
        </Router>
    );
}

export default App;
