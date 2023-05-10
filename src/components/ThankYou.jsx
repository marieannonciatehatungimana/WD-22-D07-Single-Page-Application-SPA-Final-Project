import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const ThankYou = () => {
    const location = useLocation();

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
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div className="thank-you-main">
                    <div className="thank-you-text rounded-border-element colored-border-element">
                        <p>
                            Liebe(r)
                            {location.state?.firstName
                                ? " " + location.state.firstName
                                : " Kunde"}
                            ,
                            <br />
                            <br />
                            danke, dass Sie uns kontaktiert haben. Wir werden
                            uns bald bei Ihnen melden.
                        </p>
                    </div>
                    <div className="thank-you-button-container button-container">
                        <button type="button" className="btn btn-primary">
                            <a href="/">Weiter einkaufen</a>
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ThankYou;
