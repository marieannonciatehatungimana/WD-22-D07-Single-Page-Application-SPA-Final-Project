import Footer from "./Footer";
import Nav from "./Nav";

const PhotoAndVideo = () => {
    return (
        <div>
            <Nav pathName={"photo-and-video"} />
            <main>
                <div class="sub-main rounded-border-element">
                    <div class="articles-container">
                        <div class="article">
                            <div class="article-img-container">
                                <img
                                    src="images/foto-and-video/canon.png"
                                    width="350px"
                                    height="270px"
                                />
                            </div>
                            <br />
                            <p>
                                CANON EOS 2000D Kit Spiegelreflexkamera
                                <br />
                                <br />
                                <span class="item-price">469,99 €</span>
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
                                    src="images/foto-and-video/rollei- kompaktes.jpg"
                                    width="190px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Rollei - kompaktes Videostativ
                                <br />
                                <br />
                                <span class="item-price">17,95 €</span>
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
                                <span class="item-price">4895,75 €</span>
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
                                    src="images/foto-and-video/fotolicht-lumen.jpg"
                                    width="300px"
                                    height="300px"
                                />
                            </div>
                            <br />
                            <p>
                                Fotolicht Lumen Studio 150
                                <br />
                                <br />
                                <span class="item-price">512,88 €</span>
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
                                <span class="item-price">247,99 €</span>
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
                                    src="images/foto-and-video/classic.jpg"
                                    width="390px"
                                    height="250px"
                                />
                            </div>
                            <br />
                            <p>
                                Leica M3--1954
                                <br />
                                <br />
                                <span class="item-price">99,61 €</span>
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
            <Footer />
        </div>
    );
};

export default PhotoAndVideo;
