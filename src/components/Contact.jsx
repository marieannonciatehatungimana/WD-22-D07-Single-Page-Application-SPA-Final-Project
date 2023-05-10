import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Contact = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Redirect and pass data.
        navigate("/thank-you", { state: { ...inputs } });
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="/">
                    <img
                        className="home-icon"
                        src="images/home/home-icon.png"
                        alt="Home"
                    />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="/office">
                                Büro
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/smartphone">
                                Smartphone
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/tv-and-audio">
                                TV & Audio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/photo-and-video">
                                Foto & Video
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/games">
                                Spiele
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/offers">
                                Angebote
                            </a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/contact">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="rounded-border-element">
                            <legend className="rounded-border-element">
                                Ihre Daten
                            </legend>
                            <div>
                                <label htmlFor="firstName">Vorname:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={inputs.firstName || ""}
                                    onChange={handleChange}
                                    maxLength="30"
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName">Nachname:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    maxLength="30"
                                />
                            </div>

                            <div>
                                <label htmlFor="street">Straße:</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    maxLength="30"
                                />
                            </div>
                            <div>
                                <label htmlFor="zipcode">PLZ:</label>
                                <input
                                    type="text"
                                    id="zipcode"
                                    name="zipcode"
                                    maxLength="30"
                                />
                            </div>
                            <div>
                                <label htmlFor="city">Ort:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    maxLength="30"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone">Telefon:</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    maxLength="30"
                                />
                            </div>

                            <div>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    maxLength="30"
                                />
                            </div>

                            <div>
                                <label htmlFor="comments">Kommentare:</label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows="4"
                                    cols="50"
                                ></textarea>
                            </div>
                        </fieldset>
                        <div className="button-container">
                            <button
                                type="submit"
                                className="btn btn-primary"
                                value="senden"
                            >
                                Senden
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
