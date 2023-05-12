/**
 *  Product class, um Produkte in meinem Shop zu modellieren.
 */
class Product {
    constructor(
        id,
        name,
        price,
        category,
        quantityInStock,
        isReduced,
        reducedPrice,
        imageLink,
        imageWidth,
        imageHeight,
        rating
    ) {
        this.id = id;
        this.name = name; // Name
        this.price = price; // Preis
        this.category = category; // Kategorie (z.B. Büro, Smartphone, TV und Audio,...)
        this.quantityInStock = quantityInStock; // Wie viele auf lager.
        this.isReduced = isReduced; // Im Angebot?
        this.reducedPrice = reducedPrice; // Angebotspreis.
        this.imageLink = imageLink; // Link zum Bild.
        this.imageWidth = imageWidth; // Bildbreite.
        this.imageHeight = imageHeight; // Bildhöhe.
        this.rating = rating; // Rating.
    }
}

export default Product;
