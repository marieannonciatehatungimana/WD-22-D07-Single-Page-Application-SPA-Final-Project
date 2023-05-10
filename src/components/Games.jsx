const Games = () => {
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
                        <li class="nav-item active">
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
                                    src="images/games/minecraft.jpg"
                                    width="190px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Minecraft: Nintendo Switch Edition
                                <br />
                                <br />
                                <span class="item-price">23,99 €</span>
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
                                    src="images/games/nintendo-switch.jpg"
                                    width="348px"
                                    height="225px"
                                />
                            </div>
                            <br />
                            <p>
                                Nintendo Switch Konsole
                                <br />
                                <br />
                                <span class="item-price">208 €</span>
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
                                    src="images/games/holidays.jpg"
                                    width="390px"
                                    height="200px"
                                />
                            </div>
                            <br />
                            <p>
                                Celebrate Holidays
                                <br />
                                <br />
                                <span class="item-price">55,87 €</span>
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
                                    src="images/games/xbox-konsole.jpg"
                                    width="180px"
                                    height="230px"
                                />
                            </div>
                            <br />
                            <p>
                                Xbox 360 - Konsole Core weiß
                                <br />
                                <br />
                                <span class="item-price">70,78 €</span>
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
                                    src="images/games/ddi-controller.jpg"
                                    width="300px"
                                    height="210px"
                                />
                            </div>
                            <br />
                            <p>
                                DDiswoee Xbox 360 Wireless Controller, Wireless
                                Game Controller
                                <br />
                                <br />
                                <span class="item-price">32,84 €</span>
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
                                    src="images/games/x-box.jpg"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Xbox Series S 512GB - Fortnite
                                <br />
                                <br />
                                <span class="item-price">504,88 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/5-star.jpg"
                                class="rating-5"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Games;
