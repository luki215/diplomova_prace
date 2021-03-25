import { categories } from "src/categories/categories.data";
import { Product } from "src/shared/interfaces/product.interface";

export const products: Product[] = [
    {
        title: "Example product",
        shortDesc: "Tempora laudantium suscipit iusto.",
        description: "Tempora laudantium suscipit iusto. Vel soluta tempora dolorum quam qui. Rerum ipsa ut reprehenderit voluptatum iure.",
        category: categories[0],
        image: "http://placeimg.com/640/480/nature",
        price: 120,
        similarProducts: [],
        stockState: {
            state: "available",
            deliveryIn: 2,
            instockCount: 20
        },
        properties: [
            {
                name: "Nároky na světlo",
                value: "stín",
                ico: "fa-cloud"
            }
        ]
    }
]