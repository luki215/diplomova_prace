import { products } from "src/products/products.data";
import { Homepage } from "src/shared/interfaces/homepage.interface";

export const homepage: Homepage =
{
    seo: {
        title: "Homepage",
        description: "",
    },
    campaigns: [
        {
            title: "Jarní speciál",
            products: [products[0], products[0], products[0], products[0]]
        },
        {
            title: "Nejprodávanější",
            products: [products[0], products[0], products[0], products[0]]
        },
        {
            title: "Výběr zahradníka",
            products: [products[0], products[0], products[0], products[0]]
        }
    ]
}
