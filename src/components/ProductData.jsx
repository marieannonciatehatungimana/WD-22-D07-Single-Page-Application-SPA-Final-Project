const ProductData = ({ product }) => {
    return (
        <div className="article">
            <div className="article-img-container">
                <img
                    src={product.imageLink}
                    width={`${product.imageWidth}px`}
                    height={`${product.imageHeight}px`}
                    alt={product.name}
                />
            </div>
            <br />
            {!product.isReduced && (
                <p>
                    {product.name}
                    <br />
                    <br />
                    <span className="item-price">{product.price} €</span>
                </p>
            )}
            {product.isReduced && (
                <p>
                    {product.name}
                    <br />
                    <br />
                    <span className="item-price-reduced">
                        {product.reducedPrice} €
                    </span>
                    <span className="item-price-original">
                        Statt: {product.price} €
                    </span>
                </p>
            )}

            <img
                src={`images/ratings/${product.rating}-star.jpg`}
                className={`rating-${product.rating}`}
                alt="rating"
            />
        </div>
    );
};

export default ProductData;
