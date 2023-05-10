/**
 *  Product categories.
 */
class ProductCategory {
    static FOTO_AND_VIDEO = new ProductCategory("FOTO_AND_VIDEO");
    static GAMES = new ProductCategory("GAMES");
    static OFFERS = new ProductCategory("OFFERS");
    static OFFICE = new ProductCategory("OFFICE");
    static SMART_PHONE = new ProductCategory("SMART_PHONE");
    static TV_AND_AUDIO = new ProductCategory("TV_AND_AUDIO");

    constructor(name) {
        this.name = name;
    }
}

export default ProductCategory;
