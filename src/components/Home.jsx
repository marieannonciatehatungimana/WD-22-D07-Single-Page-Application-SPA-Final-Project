import React, { useEffect, useState } from "react";
import ProductService from "../product/product-service";
import Footer from "./Footer";
import Nav from "./Nav";
import ProductData from "./ProductData";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data.
        const productService = new ProductService();
        const fetchData = async () => {
            try {
                const data = await productService.findReducedProducts();

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
            <Nav pathName={"home"} />
            <main>
                <div className="home-container">
                    <div className="home-contents rounded-border-element">
                        <div>
                            <h3>Top Angebote</h3>
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
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
