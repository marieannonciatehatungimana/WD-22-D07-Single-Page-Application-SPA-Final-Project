import Footer from "./Footer";
import Nav from "./Nav";

const TvAndAudio = () => {
    return (
        <div>
            <Nav pathName={"tv-and-audio"} />
            <main>
                <div class="sub-main rounded-border-element">
                    <div class="articles-container">
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/tv-and-audio/tv-samsung.jpg"
                                    width="367px"
                                    height="235px"
                                />
                            </div>
                            <br />
                            <p>
                                Samsung GU43AU7199U LED-Fernseher
                                <br />
                                <br />
                                <span class="item-price">745,57 €</span>
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
                                    src="images/tv-and-audio/cd-player.jpg"
                                    width="300px"
                                    height="210px"
                                />
                            </div>
                            <br />
                            <p>
                                Tragbarer CD-Player
                                <br />
                                <br />
                                <span class="item-price">39,90 €</span>
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
                                    src="images/tv-and-audio/lg-tv.jpg"
                                    width="367px"
                                    height="242px"
                                />
                            </div>
                            <br />
                            <p>
                                LG 43UP81009LR LCD-LED Fernseher (108 cm/43
                                Zoll)
                                <br />
                                <br />
                                <span class="item-price">348,33 €</span>
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
                                    src="images/tv-and-audio/microphone.jpg"
                                    width="351px"
                                    height="198px"
                                />
                            </div>
                            <br />
                            <p>
                                Audio-Technica AE 5400
                                <br />
                                <br />
                                <span class="item-price">225,88 €</span>
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
                                    src="images/tv-and-audio/telefunken.jpg"
                                    width="367px"
                                    height="235px"
                                />
                            </div>
                            <br />
                            <p>
                                Telefunken D43F553M1 LED-Fernseher (108 cm/43
                                Zoll, Full HD)
                                <br />
                                <br />
                                <span class="item-price">975,57 €</span>
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
                                    src="images/tv-and-audio/sharp.jpg"
                                    width="367px"
                                    height="242px"
                                />
                            </div>
                            <br />
                            <p>
                                Sharp 50" 4K ULTRA HD ANDROID TV
                                <br />
                                <br />
                                <span class="item-price">634,77 €</span>
                            </p>
                            <br />
                            <img
                                src="images/ratings/4-star.jpg"
                                class="rating-4"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TvAndAudio;
