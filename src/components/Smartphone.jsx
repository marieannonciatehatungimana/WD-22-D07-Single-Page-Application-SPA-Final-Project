const Smartphone = () => {
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
                        <li class="nav-item active">
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
                                <span class="item-price">129,90 €</span>
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
                                    src="images/smartphones/iphone-7.jpg"
                                    width="170px"
                                    height="250px"
                                />
                            </div>
                            <br />
                            <p>
                                iPhone 7 32 GB - Schwarz
                                <br />
                                <br />
                                <span class="item-price">199,00 €</span>
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
                                    src="images/smartphones/huawei-p-smart.jpg"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Huawei P Smart 2021 4GB/128GB
                                <br />
                                <br />
                                <span class="item-price">301,88 €</span>
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
                                    src="images/smartphones/google-pixel-6.png"
                                    width="200px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Google Pixel 6
                                <br />
                                <br />
                                <span class="item-price">508,24 €</span>
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
                                <span class="item-price">250,71 €</span>
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
                                    src="images/smartphones/iPhone-13-mini.png"
                                    width="250px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                iPhone 13 mini mit 4 GB
                                <br />
                                <br />
                                <span class="item-price">799,99 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/3-star.jpg"
                                class="rating-3"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Smartphone;
