import ProductCategory from "./product-category";
import Product from "./product-class";

/**
 *  The list of products.
 */
const products = [
    // Office products.
    new Product(
        "51af5d6f-eccf-4c6e-b98d-3ce805c92009",
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
        "512020c2-ae21-4db3-aa30-5f22aff9cdfd",
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
        "90d1e4ed-41b0-472a-a374-4280ce626552",
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
        "b0f01a96-b74a-44fc-b27c-612b9fdafbb8",
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
        "41c1d06a-1f42-4f99-95f4-8ad1fa64d4e4",
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
        "f6cbde88-2c76-4dbe-b254-56a380e29756",
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
