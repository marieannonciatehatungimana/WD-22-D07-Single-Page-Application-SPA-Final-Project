const Contact = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                    <img
                        className="home-icon"
                        src="images/home/home-icon.png"
                        alt="Home"
                    />
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/office">
                                Büro
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/smartphone">
                                Smartphone
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/tv-and-audio">
                                TV & Audio
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/photo-and-video">
                                Foto & Video
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/games">
                                Spiele
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/offers">
                                Angebote
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="/contact">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div class="form-container">
                    <form id="forms" method="get" action="/thank-you.html">
                        <fieldset class="rounded-border-element">
                            <legend class="rounded-border-element">
                                Ihre Daten
                            </legend>
                            <div>
                                <label for="firstName">Vorname:</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    maxlength="30"
                                />
                            </div>
                            <div>
                                <label for="lastName">Nachname:</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    maxlength="30"
                                />
                            </div>

                            <div>
                                <label for="street">Straße:</label>
                                <input
                                    type="text"
                                    id="street"
                                    name="street"
                                    maxlength="30"
                                />
                            </div>
                            <div>
                                <label for="zipcode">PLZ:</label>
                                <input
                                    type="text"
                                    id="zipcode"
                                    name="zipcode"
                                    maxlength="30"
                                />
                            </div>
                            <div>
                                <label for="city">Ort:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    maxlength="30"
                                />
                            </div>

                            <div>
                                <label for="phone">Telefon:</label>
                                <input
                                    type="phone"
                                    id="phone"
                                    name="phone"
                                    maxlength="30"
                                />
                            </div>

                            <div>
                                <label for="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    maxlength="30"
                                />
                            </div>

                            <div>
                                <label for="comments">Kommentare:</label>
                                <textarea
                                    id="comments"
                                    name="comments"
                                    rows="4"
                                    cols="50"
                                ></textarea>
                            </div>
                        </fieldset>
                        <div class="button-container">
                            <button
                                type="button"
                                class="btn btn-primary"
                                form="forms"
                                value="senden"
                            >
                                Senden
                            </button>
                        </div>
                    </form>
                </div>
            </main>
            <footer>
                <p>&copy; 2023 Marie's Shop. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Contact;
