import Product from "./product-class";
import ProductCategory from "./product-category";

/**
 *  The list of products.
 */
const products = [
    // Office products.
    new Product(
        "Böttcher-AG Ordner, A4, breit, 80mm, Karton, schwarz, Wolkenmarmor",
        3.57,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/folder.jpg",
        150,
        300,
        5
    ),
    new Product(
        "HP LaserJet M110w Wireless Black & White",
        169.88,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/hp-printer.png",
        300,
        210,
        2
    ),
    new Product(
        "Büroklammerspender 2705199, magnetisch",
        4.75,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/paper-clips.jpg",
        280,
        300,
        4
    ),
    new Product(
        "Igepa Navigator Universal Papier A4, 80g/m², 500 Blatt",
        5.78,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/igepa-papier.jpg",
        180,
        230,
        4
    ),
    new Product(
        "Herlitz Briefablage 64014",
        11.89,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/herlitz-ablagekorb.jpg",
        300,
        210,
        3
    ),
    new Product(
        "50 Schneider Kugelschreiber K15 farbsortiert Schreibfarbe blau",
        12.61,
        ProductCategory.OFFICE.name,
        20,
        false,
        null,
        "images/office/schneider-kugelschreiber.jpg",
        300,
        300,
        1
    ),
];

export default products;
