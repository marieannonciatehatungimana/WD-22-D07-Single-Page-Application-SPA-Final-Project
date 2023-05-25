import React, { useEffect, useState } from "react";
import ProductCategory from "../product/product-category";
import ProductService from "../product/product-service";
import Footer from "./Footer";
import Nav from "./Nav";
import ProductData from "./ProductData";

const TvAndAudio = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data.
        const productService = new ProductService();
        const fetchData = async () => {
            try {
                const data = await productService.findByCategory(
                    ProductCategory.TV_AND_AUDIO.name
                );

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
            <Nav pathName={"tv-and-audio"} />
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

export default TvAndAudio;
