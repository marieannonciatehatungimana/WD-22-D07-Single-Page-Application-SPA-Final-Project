/**
 *  ProductService class, um aktionen an Produkten durchzuführen.
 */
class ProductService {
    // Nach Name sortieren (Verwendung von Array.sort()).
    sortByName(products) {
        products.sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });

        return products;
    }

    // Suche nach Name - vollständig oder nur ein Substring (Verwendung von Array.filter()).
    searchByName(products, nameSubstring) {
        const result = products.filter(
            (p) =>
                p.name.toLowerCase().indexOf(nameSubstring.toLowerCase()) !== -1
        );

        return result;
    }

    // Export der Produkte mit nur bestimmten properties (z.B. nur "name" und "price") (Verwendung von Array.map(), computed properties).
    export(products, properties) {
        return products.map((p) => {
            const exportedEntry = {};

            for (const field of properties) {
                exportedEntry[field] = p[field];
            }

            return exportedEntry;
        });
    }
}

export default ProductService;
