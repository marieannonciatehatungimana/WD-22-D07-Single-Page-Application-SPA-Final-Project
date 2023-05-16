import ProductCategory from "./product-category";
import Product from "./product-class";

/**
 *  The list of products.
 */
const products = [
    // ---------------- Office products. --------------------------------

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

    // ---------------- Photo and video products. --------------------------------

    new Product(
        "46a18709-917a-4168-ac4e-a5dd3cc57341",
        "CANON EOS 2000D Kit Spiegelreflexkamera",
        469.99,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/canon.png",
        350,
        270,
        3
    ),
    new Product(
        "6c1b8b2b-67c7-4597-9686-d8c017114d43",
        "Rollei - kompaktes Videostativ",
        17.95,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/rollei- kompaktes.jpg",
        190,
        300,
        5
    ),
    new Product(
        "1cb5223a-899c-4ce5-b2fd-030b815d6721",
        "Sony HDC-5500 High performance",
        4895.75,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/sony-hdc-5500.jpeg",
        372,
        224,
        4
    ),
    new Product(
        "ad18ce25-efad-4afe-ad36-af977f2bdd6f",
        "Fotolicht Lumen Studio 150",
        512.88,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/fotolicht-lumen.jpg",
        300,
        300,
        5
    ),
    new Product(
        "23e0db81-e5c9-4a86-9bc2-8b19673fac87",
        "PANASONIC LUMIX S Series Camera Lens",
        247.99,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/camera-lens.jpg",
        375,
        274,
        4
    ),
    new Product(
        "75b15638-7f64-4e79-aa9e-897f1f05a608",
        "Leica M3--1954",
        99.61,
        ProductCategory.PHOTO_AND_VIDEO.name,
        20,
        false,
        null,
        "images/foto-and-video/classic.jpg",
        390,
        250,
        1
    ),

    // ---------------- Games products. --------------------------------

    new Product(
        "43af128a-62f6-4156-8354-e731dee8bac3",
        "Minecraft: Nintendo Switch Edition",
        23.99,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/minecraft.jpg",
        190,
        300,
        5
    ),
    new Product(
        "0d99b850-d464-4dba-a657-18a50a52d66b",
        "Nintendo Switch Konsole",
        208.0,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/nintendo-switch.jpg",
        348,
        225,
        2
    ),
    new Product(
        "d71d9433-432e-44d1-a82e-103249134a9f",
        "Celebrate Holidays",
        55.87,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/holidays.jpg",
        300,
        150,
        4
    ),
    new Product(
        "d6d35cb5-2bc8-479a-870d-136b47da17b6",
        "Xbox 360 - Konsole Core weiß",
        70.78,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/xbox-konsole.jpg",
        180,
        230,
        2
    ),
    new Product(
        "13d72979-0fd3-410c-a242-16e863739ab2",
        "DDiswoee Xbox 360 Wireless Controller, Wireless Game Controller",
        32.84,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/ddi-controller.jpg",
        300,
        210,
        3
    ),
    new Product(
        "565491d1-ab3b-4ac3-a242-dbb203df0b38",
        "Xbox Series S 512GB - Fortnite",
        504.88,
        ProductCategory.GAMES.name,
        20,
        false,
        null,
        "images/games/x-box.jpg",
        300,
        300,
        5
    ),
];

export default products;
