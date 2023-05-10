import React, { useEffect, useState } from "react";
import ProductService from "../product/product-service";
import Footer from "./Footer";
import ProductData from "./ProductData";

const Office = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data.
        const productService = new ProductService();
        const fetchData = async () => {
            try {
                const data = await productService.findByCategory("OFFICE");

                // Set state when the data received.
                setData(data);
            } catch (error) {
                console.log(error);
                setData([]);
            }
        };

        fetchData();
    }, []);

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
                        <li className="nav-item active">
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
                <div className="sub-main rounded-border-element">
                    <div className="articles-container">
                        {data?.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ProductData product={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Office;
