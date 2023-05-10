import Footer from "./Footer";

const Offers = () => {
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
                        <li class="nav-item active">
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
                                    src="images/smartphones/samsung-galaxy-s22-5g.png"
                                    width="400px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Samsung Galaxy S22 5G
                                <br />
                                <br />
                                <span class="item-price-reduced">129,90 €</span>
                                <span class="item-price-original">
                                    Statt: 298,44 €
                                </span>
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
                                    src="images/foto-and-video/camera-lens.jpg"
                                    width="375px"
                                    height="274px"
                                />
                            </div>
                            <br />
                            <p>
                                PANASONIC LUMIX S Series Camera Lens
                                <br />
                                <br />
                                <span class="item-price-reduced">247,99 €</span>
                                <span class="item-price-original">
                                    Statt: 303,01 €
                                </span>
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
                                <span class="item-price-reduced">5,78 €</span>
                                <span class="item-price-original">
                                    Statt: 12,00 €
                                </span>
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
                                    src="images/smartphones/xiaomi-11t.png"
                                    width="200px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Xiaomi 11T Pro 5G
                                <br />
                                <br />
                                <span class="item-price-reduced">250,71 €</span>
                                <span class="item-price-original">
                                    Statt: 271,99 €
                                </span>
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
                                    src="images/foto-and-video/sony-hdc-5500.jpeg"
                                    width="372px"
                                    height="224px"
                                />
                            </div>
                            <br />
                            <p>
                                Sony HDC-5500 High performance
                                <br />
                                <br />
                                <span class="item-price-reduced">
                                    4895,75 €
                                </span>
                                <span class="item-price-original">
                                    Statt: 6432,00 €
                                </span>
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
                                <span class="item-price-reduced">169,88 €</span>
                                <span class="item-price-original">
                                    Statt: 180,73 €
                                </span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/2-star.jpg"
                                class="rating-2"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Offers;
