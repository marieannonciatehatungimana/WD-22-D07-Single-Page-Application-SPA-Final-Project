const Office = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="/">
                    <img
                        class="home-icon"
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
                        <li class="nav-item active">
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
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">
                                Kontakt
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main>
                <div class="sub-main rounded-border-element">
                    <div class="articles-container">
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/folder.jpg"
                                    width="150px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Böttcher-AG Ordner, A4, breit, 80mm, Karton,
                                schwarz, Wolkenmarmor
                                <br />
                                <br />
                                <span class="item-price">3,57 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/5-star.jpg"
                                class="rating-5"
                            />
                        </div>
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/hp-printer.png"
                                    width="300px"
                                    height="210px"
                                />
                            </div>
                            <br />
                            <p>
                                HP LaserJet M110w Wireless Black & White
                                <br />
                                <br />
                                <span class="item-price">169,88 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/2-star.jpg"
                                class="rating-2"
                            />
                        </div>
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/paper-clips.jpg"
                                    width="280px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Büroklammerspender 2705199, magnetisch
                                <br />
                                <br />
                                <span class="item-price">4,75 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/4-star.jpg"
                                class="rating-4"
                            />
                        </div>
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/igepa-papier.jpg"
                                    width="180px"
                                    height="230px"
                                />
                            </div>
                            <br />
                            <p>
                                Igepa Navigator Universal Papier A4, 80g/m², 500
                                Blatt
                                <br />
                                <br />
                                <span class="item-price">5,78 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/4-star.jpg"
                                class="rating-4"
                            />
                        </div>
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/herlitz-ablagekorb.jpg"
                                    width="300px"
                                    height="210px"
                                />
                            </div>

                            <br />
                            <p>
                                Herlitz Briefablage 64014
                                <br />
                                <br />
                                <span class="item-price">11,89 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/3-star.jpg"
                                class="rating-3"
                            />
                        </div>
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/office/schneider-kugelschreiber.jpg"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                50 Schneider Kugelschreiber K15 farbsortiert
                                Schreibfarbe blau
                                <br />
                                <br />
                                <span class="item-price">12,61 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/1-star.jpg"
                                class="rating-1"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <p>&copy; 2023 Marie's Shop. Alle Rechte vorbehalten.</p>
            </footer>
        </div>
    );
};

export default Office;
